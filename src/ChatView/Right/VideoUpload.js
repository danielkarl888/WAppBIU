import { useState } from "react";
function VideoUpload({ conversationMessages, setLastMessage,setLastMessageType }) {
    const [messageVideo, setMessageVideo] = useState(
        {
            src: "send",
            type: "video",
            context: "",
            time: ""
        });
    const handleSendImage = (event) => {
        event.preventDefault();
        conversationMessages.push(messageVideo);
        setLastMessage(conversationMessages[conversationMessages.length - 1].context);
        setLastMessageType("video");
        setMessageVideo({
            src: "send",
            type: "video",
            context: "",
            time: ""
        });
        console.log(conversationMessages);
    }
    function addZero(i) {
        if (i < 10) {i = "0" + i}
        return i;
      }
    function handleChange(e) {
        var reader = new FileReader();
        reader.onloadend = function () {
            var base64data = reader.result; 
            console.log(base64data);      
            var today = new Date();
            let h = addZero(today.getHours());
            let m = addZero(today.getMinutes());
            var date = h + ":" + m;
            setMessageVideo({ ...messageVideo, context: base64data, time: date })
        }
        reader.readAsDataURL(e.target.files[0]);
        console.log(messageVideo);
    }

    return (
        <div className="modal fade" id="videoModal" tabIndex="-1" role="dialog" aria-labelledby="videoModal" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Please Upload video</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form className="mb-3">
                            <label htmlFor="formVideoFile" className="form-label">select video here</label>
                            <input
                                accept="video/*"
                                className="form-control"
                                type="file"
                                id="formVideoFile"
                                onChange={handleChange}
                            ></input>
                            <div className="modal-footer">
                                <button onClick={handleSendImage} type="submit" className="btn btn-primary" data-dismiss="modal">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default VideoUpload;