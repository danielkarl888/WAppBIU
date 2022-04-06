import TopHeadingLeft from "./TopHeadingLeft";
import SearchBox from "./SearchBox";
import Contact from "./contact";
import './LeftChat.css';

function LeftChat() {
    return (
      <div className="container-left">
<TopHeadingLeft />
<SearchBox />
<Contact />
      </div>
        
    );
  }
  
  export default LeftChat;