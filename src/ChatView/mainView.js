import './mainView.css';
import LeftChat from './Left/LeftChat';
import RightChat from './Right/RightChat';
import { useState } from 'react';
import activeUser from '../ManagingUsersList/activeUser';
function MainView() {
    const [conversationsActiveUser,setConversationsActiveUser] = useState(activeUser.conversations);

    return (
        
        <form className="container-fluid col mt-2"> 
            <span className='row chat-one' >
                <span className="col-4 leftside"> <LeftChat conversationsActiveUser={conversationsActiveUser} /></span>
                <span className="col  rightside"> <RightChat /></span>
            </span>
        </form>
    );
  }
  
  export default MainView;