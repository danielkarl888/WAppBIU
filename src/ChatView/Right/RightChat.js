import './RightChat.css';
import TopheadingRight from './TopHeadingRight';
import ChatBox from './ChatBox';
import Message from './Messages';
import OutComeMessage from './OutComeMess';
import ReplayRow from './RepleyRow';
import activeUser from '../../ManagingUsersList/activeUser';
function RightChat() {
    return (
        <span>
            <TopheadingRight contact={activeUser.conversations[0].username}/>
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
            
            <ReplayRow />
            
        </span>

    );
}

export default RightChat;