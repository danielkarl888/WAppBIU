import { useState } from "react";
import ImageUpload from "./ImageUpload";
import VideoUpload from "./VideoUpload";
import VoiceUpload from "./VoiceUpload";

function ReplayRow({ conversationMessages, setConversationsActiveUser, setConversationNumber, setLastMessage, setLastMessageType }) {
    const handleSendText = (event) => {
        event.preventDefault();
        conversationMessages.push(messageText);
        setLastMessage(conversationMessages[conversationMessages.length - 1].context);
        console.log(conversationMessages);
        setMessageText({
            src: "send",
            type: "text",
            context: "",
            time: ""
        });
        setLastMessageType("text");
    }
    function addZero(i) {
        if (i < 10) {i = "0" + i}
        return i;
      }
      
          
    const handleMessageChange = (event) => {
        const today = new Date();
        let h = addZero(today.getHours());
        let m = addZero(today.getMinutes());
        var date = h + ":" + m;
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

    return (
        <>
            <form className="row d-flex align-items-center reply">
                <div className="col-sm-1 col-xs-1 reply-paperclip">
                    <div className="btn-group dropup">
                        <button type="button" className="btn btn dropdown hiddenbtn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="bi bi-paperclip"></i>
                        </button>
                        <div className="dropdown-menu">
                            <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                <div className="btn-group-vertical mr-2" role="group" aria-label="First group">
                                    <button type="button" className="btnS" ><i className="bi bi-camera-fill" style={{ color: "black" }}></i></button>
                                    <button type="button" className="btnS " data-toggle="modal" data-target="#videoModal"><i className="bi bi-camera-video-fill" style={{ color: "black" }}></i></button>
                                    <button type="button" className="btnS" data-toggle="modal" data-target="#voiceModal"><i className="bi bi-mic-fill" style={{ color: "black" }}></i></button>
                                    <button type="button" className="btnS" data-toggle="modal" data-target="#imageModal"><i className="bi bi-image" style={{ color: "black" }}></i></button>

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

                    <button type="submit" onClick={handleSendText} className="btn-bg-transparent hiddenbtn">  <i className="bi bi-send-fill" aria-hidden="true"></i> </button>

                </div>
            </form>
            <ImageUpload conversationMessages={conversationMessages}
                setLastMessage={setLastMessage}
                setLastMessageType={setLastMessageType}
            />
            <VideoUpload
                conversationMessages={conversationMessages}
                setLastMessage={setLastMessage}
                setLastMessageType={setLastMessageType}
            />
            <VoiceUpload
                conversationMessages={conversationMessages}
                setLastMessage={setLastMessage}
                setLastMessageType={setLastMessageType}
            />

        </>
    );
}
export default ReplayRow;
