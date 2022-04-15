import { useState } from "react";
function ImageUpload({ conversationMessages, setLastMessage,setLastMessageType }) {
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
    function handleChange(e) {
        var reader = new FileReader();
        reader.onloadend = function () {
            var base64data = reader.result; 
            console.log(base64data);      
            var today = new Date();
            var date = today.getHours() + ":" + today.getMinutes();    
            setMessageImage({ ...messageImage, context: base64data, time: date })
        }
        reader.readAsDataURL(e.target.files[0]);
        console.log(messageImage);
    }

    return (
        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Please Upload image</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form className="mb-3">
                            <label htmlFor="formFile" className="form-label">select image here</label>
                            <input
                                className="form-control"
                                type="file"
                                id="formFile"
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
export default ImageUpload;