import './RightChat.css';
import TopheadingRight from './TopHeadingRight';
import ChatBox from './ChatBox';
import Message from './Messages';
import OutComeMessage from './OutComeMess';
import ReplayRow from './RepleyRow';
import activeUser from '../../ManagingUsersList/activeUser';
function RightChat({conversationsActiveUser,contact,conversationNumber,conversationMessages}) {
    return (
        <span>
            <TopheadingRight contact={contact}/>
            <div className="card mesCon" style={{ height: "70.5%" }}>
                <div className="contacts">
                <Message />
                <OutComeMessage />
                <Message />
                <OutComeMessage />
                <Message />
                <OutComeMessage />
                <Message />
                <OutComeMessage />
                <Message />
                <OutComeMessage />
                <Message />
                <OutComeMessage />
                <Message />
                <OutComeMessage />
                <Message />
                <OutComeMessage />

                </div>
            </div>

            
            <ReplayRow conversationMessages={conversationMessages}/>
            
        </span>

    );
}

export default RightChat;