import './mainView.css';
import LeftChat from './Left/LeftChat';
import RightChat from './Right/RightChat';
import { useState } from 'react';
import activeUser from '../ManagingUsersList/activeUser';
function MainView() {
    const [conversationsActiveUser, setConversationsActiveUser] = useState(activeUser.conversations);
    const [contact, setContact] = useState(conversationsActiveUser[0].username);
    const [conversationNumber, setConversationNumber] = useState(0);
    const [conversation, setConversation] = useState(activeUser.conversations[conversationNumber]);
    const [conversationMessages, setConversationMessages] = useState(conversation.messages);
    const [lastMessage, setLastMessage] = useState(conversationMessages[conversationMessages.length-1].context);

    const contactChange = (newName) => {
        setContact(newName);
    }
    const converNumberChange = (number) => {
        setConversationNumber(number);
        console.log(number);
    }
    return (

        <form className="container-fluid col mt-2">
            <span className='row chat-one' >
                <span className="col-4 leftside">
                 <LeftChat conversationsActiveUser={conversationsActiveUser}
                           setContact={contactChange}
                           setConversationMessages={setConversationMessages}
                           lastMessage={lastMessage}
                           setLastMessage={setLastMessage} />
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
                         />
                </span>
            </span>
        </form>
    );
}

export default MainView;