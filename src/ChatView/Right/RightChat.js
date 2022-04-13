import './RightChat.css';
import TopheadingRight from './TopHeadingRight';
import ChatBox from './ChatBox';
import Message from './Messages';
import OutComeMessage from './OutComeMess';
import ReplayRow from './RepleyRow';
import activeUser from '../../ManagingUsersList/activeUser';
function RightChat({conversationsActiveUser,contact,conversationNumber,conversationMessages}) {
    const messagesRender = conversationMessages.map((message,key)=>{
        if(message.src==="send")
            return <Message key={key} context={message.context}/>;
        else
            return <OutComeMessage key={key} context={message.context}/>;
    })
    return (
        <span>
            <TopheadingRight contact={contact}/>
            <div className="card mesCon" style={{ height: "70.5%" }}>
                <div className="contacts">
                {messagesRender}
                </div>
            </div>

            <ReplayRow conversationMessages={conversationMessages}/>
            
        </span>

    );
}

export default RightChat;