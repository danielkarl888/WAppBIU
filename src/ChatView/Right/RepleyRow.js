import { useState } from "react";
import activeUser from "../../ManagingUsersList/activeUser";
import ImageUpload from "./ImageUpload";
import VideoUpload from "./VideoUpload";
import VoiceUpload from "./VoiceUpload";

function ReplayRow({ conversationMessages, setConversationsActiveUser, setConversationNumber, setLastMessage, setLastMessageType,contact,setConversationMessages,conversation,server }) {
    const handleSendText = (event) => {
        event.preventDefault();
        console.log("contact is :" + contact);
        if(messageText.context!="" && contact!="")
        {
            fetch(`http://localhost:5030/api/Contacts/${contact}/messages/?user=${activeUser.userName}`, {
                method: 'POST',
                    headers: {
                    'Content-Type': 'application/json   '
                },
                body: JSON.stringify({  
                                        "content": messageText.context
              }) 
            }).then(res=>{
                if(res.ok){
                    //console.log(1111);
                    //conversationMessages.push(messageText);
                }
            })
            //console.log(server);
            TransferFetch(server);
            conversationMessages.push(messageText);
        }
        setLastMessage(conversationMessages[conversationMessages.length - 1].context);
        //console.log(conversationMessages);
        setMessageText({
            src: "send",
            type: "text",
            context: "",
            time: "",
            id:""
        });
        setLastMessageType("text");
    }
    function addZero(i) {
        if (i < 10) {i = "0" + i}
        return i;
      }
      
    const TransferFetch= (server)=>{
        fetch(`http://${server}/api/transfer`, {
            method: 'POST',
                headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({  
                    "from": activeUser.userName,
                    "to": contact,
                    "content": messageText.context  
          }) 
        })
    }      
    const handleMessageChange = (event) => {
        var date = new Date();
        setMessageText({ ...messageText, context: event.target.value, time: (addZero(date.getHours()) + ":" + addZero(date.getMinutes()) + "\n" +
                                                                                date.getUTCDate() + "/" + addZero((date.getMonth() + 1))+ "/" + date.getFullYear()) })
        //console.log(messageText);
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
            <div className="row d-flex align-items-center reply">
                <div className="col-sm-1 col-xs-1 reply-paperclip">
                    <div className="btn-group dropup">
                        <button type="button" className="btn btn dropdown hiddenbtn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="bi bi-paperclip"></i>
                        </button>
                        <div className="dropdown-menu">
                            <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                <div className="btn-group-vertical mr-2" role="group" aria-label="First group">
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
            </div>
            <ImageUpload conversationMessages={conversationMessages}
                setLastMessage={setLastMessage}
                setLastMessageType={setLastMessageType}
                contact={contact}
            />
            <VideoUpload
                conversationMessages={conversationMessages}
                setLastMessage={setLastMessage}
                setLastMessageType={setLastMessageType}
                contact={contact}
                setConversationMessages={setConversationMessages}

            />
            <VoiceUpload
                conversationMessages={conversationMessages}
                setLastMessage={setLastMessage}
                setLastMessageType={setLastMessageType}
                contact={contact}
                setConversationMessages={setConversationMessages}
            />

        </>
    );
}
export default ReplayRow;
