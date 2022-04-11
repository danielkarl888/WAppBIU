import TopHeadingLeft from "./TopHeadingLeft";
import SearchBox from "./SearchBox";
import Contact from "./contact";
import './LeftChat.css';

function LeftChat() {
    return (
      <span>
        <TopHeadingLeft />
        <div className="card" style={{height: "87%"}}>
          <div className="contacts">
            <Contact/>
            <Contact name="noam"/>
            <Contact name="noam"/>
            <Contact name="noam"/>
            <Contact name="noam"/>
            <Contact name="noam"/>
            <Contact name="noam"/>
            <Contact name="noam"/>
          </div>
          </div>
        

      </span>

    );
  }
  
  export default LeftChat;