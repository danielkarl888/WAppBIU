
import { useState } from "react";

function VoiceUpload({ conversationMessages, setLastMessage,setLastMessageType }) {
    let recorder;
    const [messageVoice, setMessageVoice] = useState(
        {
            src: "send",
            type: "voice",
            context: "",
            time: ""
        });

        function addZero(i) {
            if (i < 10) {i = "0" + i}
            return i;
          }
        const onRecord = (e) => {
            e.preventDefault();
            var reader = new FileReader();
            reader.onloadend = function () {
                var base64data = reader.result; 
                var today = new Date();
                let h = addZero(today.getHours());
                let m = addZero(today.getMinutes());
                var date = h + ":" + m;
                console.log(base64data);
                setMessageVoice({ ...messageVoice, context: base64data, time: date });
                console.log(messageVoice);
            }
            var device =  navigator.mediaDevices.getUserMedia({ audio: true });
            var items = [];
            device.then(stream => {
                recorder = new MediaRecorder(stream);
                console.log(recorder.state);
                recorder.ondataavailable = e => {
                    items.push(e.data);
                }
                recorder.onstop = e => {
                        var blob = new Blob(items, { type: 'audio/webm' });
                        reader.readAsDataURL(blob);
                }
                recorder.start();
            })
        }
          
          
    const handleSendVoice = (event) => {
        event.preventDefault();
        recorder.stop();
        if(messageVoice.context!="")
        conversationMessages.push(messageVoice);
        setLastMessage(conversationMessages[conversationMessages.length - 1].context);
        setMessageVoice({
            src: "send",
            type: "voice",
            context: "",
            time: ""
        });
        console.log(conversationMessages);
    }


    
    
    
    


    return (
        <div className="modal fade" id="voiceModal" tabIndex="- " role="dialog" aria-labelledby="voiceModal" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Please Upload voice</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <button onClick={onRecord} className="btn btn-danger offset-2 fs-4 mb-3"><i className="bi bi-record-circle"></i></button>
                            <div className="modal-footer">
                                <button onClick={handleSendVoice} type="submit" className="btn btn-primary" data-dismiss="modal">Upload Voice</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default VoiceUpload;