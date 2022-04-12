import TopHeadingLeft from "./TopHeadingLeft";
import SearchBox from "./SearchBox";
import Contact from "./contact";
import './LeftChat.css';
import activeUser from "../../ManagingUsersList/activeUser";
import { useState } from "react";
function LeftChat({conversationsActiveUser}) {
  const contacts =  conversationsActiveUser.map((conver, key)=>{
    return <Contact key={key} name={conver.username}
           lastMessageContent={conver.messages[conver.messages.length-1].context}
           time={conver.messages[conver.messages.length-1].time}/>
  })

    return (
      <span>
        <TopHeadingLeft />
        <div className="card" style={{height: "87%"}}>
          <div className="contacts">
            {contacts}
          </div>
          </div>
      </span>

    );
  }
  
  export default LeftChat;