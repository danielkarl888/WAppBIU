import TopHeadingLeft from "./TopHeadingLeft";
import SearchBox from "./SearchBox";
import Contact from "./contact";
import './LeftChat.css';
import activeUser from "../../ManagingUsersList/activeUser";
function LeftChat() {
    return (
      <span>
        <TopHeadingLeft />
        <div className="card" style={{height: "87%"}}>
          <div className="contacts">
            <Contact name={activeUser.conversations[0].username}
                     lastMessageContent={activeUser.conversations[0].messages[0].context}
                     time={activeUser.conversations[0].messages[0].time} />
            <Contact name="dudo" lastMessageContent="hloaaa!!!"/>
          </div>
          </div>
      </span>

    );
  }
  
  export default LeftChat;