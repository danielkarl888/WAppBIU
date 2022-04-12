import './RightChat.css';
import TopheadingRight from './TopHeadingRight';
import ChatBox from './ChatBox';
import ReplayRow from './RepleyRow';
import activeUser from '../../ManagingUsersList/activeUser';
function RightChat({conversationsActiveUser,contact,conversationNumber,conversationMessages}) {
    return (
        <span>
            <TopheadingRight contact={contact}/>
            <ChatBox />
            
            <ReplayRow conversationMessages={conversationMessages}/>
            
        </span>

    );
}

export default RightChat;