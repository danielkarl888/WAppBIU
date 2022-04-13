import './RightChat.css';
import TopheadingRight from './TopHeadingRight';
import ChatBox from './ChatBox';
import Message from './Messages';
import OutComeMessage from './OutComeMess';
import ReplayRow from './RepleyRow';
import activeUser from '../../ManagingUsersList/activeUser';
function RightChat({conversationsActiveUser,contact,conversationNumber,conversationMessages,
    setConversationsActiveUser,setConversationNumber,setLastMessage}) {
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

            
            <ReplayRow conversationMessages={conversationMessages}
                setConversationsActiveUser={setConversationsActiveUser}
                setConversationNumber={setConversationNumber}
                setLastMessage={setLastMessage}
            />
            
        </span>

    );
}

export default RightChat;