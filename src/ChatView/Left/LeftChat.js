import TopHeadingLeft from "./TopHeadingLeft";
import SearchBox from "./SearchBox";
import Contact from "./contact";
import './LeftChat.css';
import activeUser from "../../ManagingUsersList/activeUser";
import { useState } from "react";
function LeftChat({conversationsActiveUser, setContact, setConversationMessages,
                  lastMessage,setLastMessage,lastMessageType,setLastMessageType, setConversationsActiveUser}) {
  const contacts =  conversationsActiveUser.map((conver,index)=>{
        return <Contact
           name={conver.username}
           lastMessageContent={conver.messages[conver.messages.length-1].context}
           lastMessageType={conver.messages[conver.messages.length-1].type}
           setLastMessage={setLastMessage}
           setLastMessageType={setLastMessageType}
           time={conver.messages[conver.messages.length-1].time}
           setContact={setContact}
           setConversationMessages={setConversationMessages}
           conversationsActiveUser={conversationsActiveUser}
           index={index}
           />
  })

    return (
      <span>
        <TopHeadingLeft conversationsActiveUser={conversationsActiveUser}
         setConversationsActiveUser={ setConversationsActiveUser}
         />
        <div className="card" style={{height: "87%"}}>
          <div className="contacts">
          {contacts}
          </div>
          </div>
      </span>

    );
  }
  
  export default LeftChat;