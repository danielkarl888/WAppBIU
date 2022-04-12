import './RightChat.css';
import TopheadingRight from './TopHeadingRight';
import ChatBox from './ChatBox';
import ReplayRow from './RepleyRow';
import activeUser from '../../ManagingUsersList/activeUser';
function RightChat() {
    return (
        <span>
            <TopheadingRight contact={activeUser.conversations[0].username}/>
            <ChatBox />
            
            <ReplayRow />
            
        </span>

    );
}

export default RightChat;