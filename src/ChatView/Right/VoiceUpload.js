import { useState } from "react";
function VoiceUpload({ conversationMessages, setLastMessage,setLastMessageType }) {
    const [messagevoice, setMessageVoice] = useState(
        {
            src: "send",
            type: "voice",
            context: "",
            time: ""
        });
    const handleSendImage = (event) => {
        event.preventDefault();
        conversationMessages.push(messagevoice);
        setLastMessage(conversationMessages[conversationMessages.length - 1].context);
        setLastMessageType("voice");
        setMessageVoice({
            src: "send",
            type: "voice",
            context: "",
            time: ""
        });
        console.log(conversationMessages);
    }
    function handleChange(e) {
        var reader = new FileReader();
        reader.onloadend = function () {
            var base64data = reader.result; 
            console.log(base64data);      
            var today = new Date();
            var date = today.getHours() + ":" + today.getMinutes();    
            setMessageVoice({ ...messagevoice, context: base64data, time: date })
        }
        reader.readAsDataURL(e.target.files[0]);
        console.log(messagevoice);
    }

    const onRecord = ()=>{
        var device= navigator.mediaDevices.getUserMedia({audio: true});
        var item =[];
        device.then(stream => {
            var recorder = new MediaRecorder(stream);
            recorder.ondataavailable = e=>{
                if(recorder.state == 'inactive') {
                    var blob=new Blob(item, {type: 'audio/webm'});
            
                }
            }
        })    
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
                            <button onClick={onRecord} className="btn btn-danger offset-2 fs-4 mb-3"><i class="bi bi-record-circle"></i></button>
                            <div className="modal-footer">
                                <button onClick={handleSendImage} type="submit" className="btn btn-primary" data-dismiss="modal">Upload Voice</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default VoiceUpload;