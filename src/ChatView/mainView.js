import './mainView.css';
import LeftChat from './Left/LeftChat';
import RightChat from './Right/RightChat';
import { useState, useEffect } from 'react';
import activeUser from '../ManagingUsersList/activeUser';
function MainView() {
    const [conversationsActiveUser, setConversationsActiveUser] = useState(activeUser.conversations);

    //const [conversationsActiveUser, setConversationsActiveUser] = useState(activeUser.conversations);
    const [contact, setContact] = useState(conversationsActiveUser[0].username);
    const [server, setServer] = useState(conversationsActiveUser[0].server);

    const [conversationNumber, setConversationNumber] = useState(0);
    const [conversation, setConversation] = useState(activeUser.conversations[conversationNumber]);
    const [conversationMessages, setConversationMessages] = useState(conversation.messages);

    var context = "";
    var type ="";
    if(conversationMessages>0){
        context= conversationMessages[conversationMessages.length-1].context;
        type = conversationMessages[conversationMessages.length-1].type
    }
    const [lastMessage, setLastMessage] = useState(context);
    const [lastMessageType, setLastMessageType] = useState(type);
    
    const contactChange = (newName) => {
        setContact(newName);
    }
    const serverChange = (server) => {
        setServer(server);
    }
    return (

        <form className="container-fluid col mt-2">
            <span className='row chat-one' >
                <span className="col-4 leftside">
                 <LeftChat conversationsActiveUser={conversationsActiveUser}
                           setContact={contactChange}
                           setConversationMessages={setConversationMessages}
                           lastMessage={lastMessage}
                           setLastMessage={setLastMessage}
                           lastMessageType={lastMessageType}
                           setLastMessageType={setLastMessageType}
                           setConversationsActiveUser={setConversationsActiveUser}
                           serverChange={serverChange}
                            />
                 </span>
                <span className="col rightside"> 
                    <RightChat
                        conversationsActiveUser={conversationsActiveUser}
                        contact={contact}
                        conversationNumber={conversationNumber}
                        conversationMessages={conversationMessages}
                        setConversationsActiveUser={setConversationsActiveUser}
                        setConversationNumber={setConversationNumber}
                        setLastMessage={setLastMessage}
                        setConversationMessages={setConversationMessages}
                        conversation={conversation}
                        server={server}
                        setContact={contactChange}
                         />
                </span>
            </span>
        </form>
    );
}

export default MainView;