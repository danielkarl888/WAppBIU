import { useState } from "react";
import activeUser from "../../ManagingUsersList/activeUser";
import Message from "./Messages";
function ReplayRow({conversationMessages}) {
    const handleSendText = (event) => {
        event.preventDefault();
        conversationMessages.push(messageText);
        
        console.log(conversationMessages);
        setMessageText({
            src: "send",
            type: "text",
            context: "",
            time: ""
        });
      
    }

    const handleMessageChange = (event) => {
        var today = new Date();
        var date = today.getHours() + ":" + today.getMinutes();
        setMessageText({ ...messageText, context: event.target.value, time: date })
        console.log(messageText);
    }
    
    const [messageText, setMessageText] = useState(
        {
            src: "send",
            type: "text",
            context: "",
            time: ""
        }
        
    );
    const [submitted, setSubmitted] = useState(false);

    return (
        <div className="row d-flex align-items-center reply">
            <div className="col-sm-1 col-xs-1 reply-paperclip">
                <div className="btn-group dropup">
                    <button type="button" className="btn btn dropdown hiddenbtn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="bi bi-paperclip"></i>
                    </button>
                    <div className="dropdown-menu">
                        <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                            <div className="btn-group-vertical mr-2" role="group" aria-label="First group">
                                <button type="button" className="btnS"><i className="bi bi-image" style={{ color: "black" }}></i></button>
                                <button type="button" className="btnS "><i className="bi bi-camera-fill" style={{ color: "black" }}></i></button>
                                <button type="button" className="btnS "><i className="bi bi-music-note-beamed" style={{ color: "black" }}></i></button>
                                <button type="button" className="btnS"><i className="bi bi-mic-fill" style={{ color: "black" }}></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-10 col-xs-9 replymain">
                <input
                    onChange={handleMessageChange}
                    value={messageText.context}
                    autoComplete="off"
                    className="form-control  textarea" rows="1" id="comment" placeholder="type a message..."></input>
            </div>
            <div className="col-sm-1 col-xs-1 reply-send">
                <button onClick={handleSendText} className="btn-bg-transparent hiddenbtn"> <i className="bi bi-send-fill" aria-hidden="true"></i> </button>
                
            </div>
        </div>
    );
}
export default ReplayRow;
