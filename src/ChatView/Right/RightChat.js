import './RightChat.css';
import TopheadingRight from './TopHeadingRight';
import ChatBox from './ChatBox';
import Message from './Messages';
import OutComeMessage from './OutComeMess';
import ReplayRow from './RepleyRow';
import activeUser from '../../ManagingUsersList/activeUser';
import { useEffect, useRef } from 'react'
function RightChat({ conversationsActiveUser, contact, conversationNumber, conversationMessages,
    setConversationsActiveUser, setConversationNumber, setLastMessage,setConversationMessages, conversation,server }) {

        const messageRef = useRef();

        useEffect(() => {
            if (messageRef.current) {
              messageRef.current.scrollIntoView(
                {
                  behavior: 'smooth',
                  block: 'end',
                  inline: 'nearest'
                })
            }
          })

    const messagesRender = conversationMessages.map((message, key) => {
        if(message.context!="")
        if (message.type == "text") {
            if (message.src === "send")
                return <Message key={key} context={message.context} time={message.time} />;
            else
                return <OutComeMessage key={key} context={message.context} time={message.time} />;
        } else if (message.type == "image") {
            if (message.src === "send")
                return <Message key={key} context={<img style={{ width: "100%" }} src={message.context}></img>} time={message.time} />;
            else
                return <OutComeMessage key={key} context={<img style={{ width: "100%" }} src={message.context}></img>} time={message.time} />;
        }
        else if (message.type == "video") {
            if (message.src === "send")
                return <Message key={key} context={<video controls style={{ width: "100%" }} src={message.context}></video>} time={message.time} />;
            else
            return <OutComeMessage key={key} context={<video controls style={{ width: "100%" }} src={message.context}></video>} time={message.time} />;
        } else {
            if (message.src === "send")
                return <Message key={key} context={
                <audio controls="controls" style={{ width: "100%" }}  >
                <source src={message.context} type="video/webm"></source></audio>} time={message.time} />;
            else
            return <OutComeMessage key={key} context={
                <audio controls="controls" style={{ width: "100%" }}  >
                <source src={message.context} type="video/webm"></source></audio>} time={message.time} />;
        }
    })
    return (
        <span>
            <TopheadingRight contact={contact} />
            <div className="card mesCon" style={{ height: "70.5%" }}>
                <div className="messagesArea">
                <div ref={messageRef}> 
                    {messagesRender}
                    </div>
                </div>
            </div>


            <ReplayRow conversationMessages={conversationMessages}
                setConversationsActiveUser={setConversationsActiveUser}
                setConversationNumber={setConversationNumber}
                setLastMessage={setLastMessage}
                contact={contact}
                setConversationMessages={setConversationMessages}
                conversation={conversation}
                server={server}
            />

        </span>

    );
}

export default RightChat;