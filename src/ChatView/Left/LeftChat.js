import TopHeadingLeft from "./TopHeadingLeft";
import SearchBox from "./SearchBox";
import Contact from "./contact";
import './LeftChat.css';
import activeUser from "../../ManagingUsersList/activeUser";
import { useState } from "react";
function LeftChat({ conversationsActiveUser, setContact, setConversationMessages,
  lastMessage, setLastMessage, lastMessageType, setLastMessageType, setConversationsActiveUser, serverChange,setContact2,contact }) {
  const contacts = conversationsActiveUser.map((conver, index) => {
    if (conver.username != "")
    {
    var lastMessageContent ="";
    var lastMessageType="";
    var time="";
      if (conver.messages.length > 0) {
         lastMessageContent = conver.messages[conver.messages.length - 1].context;
         lastMessageType=conver.messages[conver.messages.length - 1].type;
         time=conver.messages[conver.messages.length - 1].time;

      }
    return <Contact
      name={conver.username}
      lastMessageContent={lastMessageContent}
      lastMessageType={lastMessageType}
      time={time}
      setLastMessage={setLastMessage}
      setLastMessageType={setLastMessageType}
      setContact={setContact}
      setConversationMessages={setConversationMessages}
      conversationsActiveUser={conversationsActiveUser}
      index={index}
      serverChange={serverChange}
      server={conver.server}
      setContact2={setContact2}
      contact={contact}
    />
  }})

  return (
    <span>
      <TopHeadingLeft
        conversationsActiveUser={conversationsActiveUser}
        setConversationsActiveUser={setConversationsActiveUser}
        setContact={setContact}
        setContact2={setContact2} />
      <div className="card" style={{ height: "87%" }}>
        <div className="contacts">
          {contacts}
        </div>
      </div>
    </span>

  );
}

export default LeftChat;