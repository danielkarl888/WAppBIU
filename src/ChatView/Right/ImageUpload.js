import { useState } from "react";
function ImageUpload({ conversationMessages, setLastMessage,setLastMessageType,contact }) {
    const [file, setFile] = useState();
    const [messageImage, setMessageImage] = useState(
        {
            src: "send",
            type: "image",
            context: "",
            time: ""
        });
    const handleSendImage = (event) => {
        event.preventDefault();
        if(messageImage.context!="" && contact!="")
        conversationMessages.push(messageImage);
        setLastMessage(conversationMessages[conversationMessages.length - 1].context);
        setLastMessageType("image")
        console.log(conversationMessages);
        setMessageImage({
            src: "send",
            type: "image",
            context: "",
            time: ""
        });
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
            setMessageImage({ ...messageImage, context: base64data, time: date })
        }
        reader.readAsDataURL(e.target.files[0]);
        console.log(messageImage);
    }

    return (
        <div className="modal fade" id="imageModal" tabIndex="-1" role="dialog" aria-labelledby="imageModal" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Please Upload image</h5>
                        <button type="button" className="btn-close" data-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">select image here</label>
                            <input
                                accept="image/*"
                                className="form-control"
                                type="file"
                                id="formFile"
                                onChange={handleChange}
                            ></input>
                            <div className="modal-footer">
                                <button onClick={handleSendImage} type="submit" className="btn btn-primary" data-dismiss="modal" style={{width:"20%"}}>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ImageUpload;