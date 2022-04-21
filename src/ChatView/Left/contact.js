import { keyboard } from "@testing-library/user-event/dist/keyboard";
import contacts from "./contacts";
 
function Contact({name,lastMessageContent,lastMessageType,setLastMessage,setLastMessageType,time,setContact,setConversationMessages,conversationsActiveUser,index}) {
    const changeConversation = ()=>{
        setContact(name);
        console.log(index);
        setConversationMessages(conversationsActiveUser[index].messages);
        setLastMessage(conversationsActiveUser[index].messages[conversationsActiveUser[index].messages.length-1])
        }
        var messagePreview;
        if(lastMessageType == "text") {
            messagePreview= lastMessageContent;
        } else if (lastMessageType == "image"){
            messagePreview=<img style={{ width: "20.5%" }} src={lastMessageContent}></img>;
        } else if (lastMessageType == "video"){
            messagePreview=<video style={{ width: "20.5%" }} src={lastMessageContent}></video>;
        } else {
            messagePreview=<div>audio<i className="bi bi-headphones"></i></div>;
        }
    return (
        <li onClick={changeConversation} className="list-group-item">
            <div  className="row sideBar-body">
                <div className="col-sm-3 col-xs-3 sideBar-avatar">
                    <div className="heading-avatar-icon">
                        <img src="bg-1.jpg" alt="Avatar" className="avatar"></img>
                    </div>
                </div>
                <div className="col-sm-6 col-xs-9 sideBar-main">
                    <div className="row mid-con">

                        <div className="row col-xs-8 sideBar-name">
                            <span className="name-meta ">{name}
                            </span>
                        </div>
                        <div className="row col-xs-4 pull-right last-messege">
                            <span className="time-meta pull-right">
                            {messagePreview}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 col-xs-9 sideBar-time"><span className="time-meta pull-right">{time}
                </span>
                </div>
            </div>
        </li>
    );
}

export default Contact;