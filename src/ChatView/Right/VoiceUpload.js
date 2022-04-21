
import { useState } from "react";

function VoiceUpload({ conversationMessages, setLastMessage, setLastMessageType, contact,setConversationMessages }) {
    let recorder;
    var test;
        

    function addZero(i) {
        if (i < 10) { i = "0" + i }
        return i;
    }
    const onRecord = (e) => {
        e.preventDefault();
        var reader = new FileReader();
        reader.onloadend = event => {
            var base64data = reader.result;
            var today = new Date();
            let h = addZero(today.getHours());
            let m = addZero(today.getMinutes());
            var date = h + ":" + m;
            // console.log(base64data);
            test={
                src: "send",
                type: "voice",
                context: base64data,
                time: date
            }
        conversationMessages.push(test);
        setLastMessage(conversationMessages[conversationMessages.length - 1].context);
            console.log(conversationMessages);
        }
        var device = navigator.mediaDevices.getUserMedia({ audio: true });
        var items = [];
        device.then(stream => {
            recorder = new MediaRecorder(stream);
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
    }








    return (
        <div className="modal fade" id="voiceModal" tabIndex="- " role="dialog" aria-labelledby="voiceModal" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle"><strong>Upload Voice</strong></h5>
                        <button type="button" className="close closeModal" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>

                    </div>
                    <div className="modal-body">
                        <form>
                            <button onClick={onRecord} className="btn btn-danger offset-2 fs-4 mb-3"><i className="bi bi-record-circle"> record</i></button>
                            <div>
                                <button onClick={handleSendVoice} type="submit" className="btn btn-md btn-primary offset-2  mb-3" data-dismiss="modal">Click Here after record!</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default VoiceUpload;