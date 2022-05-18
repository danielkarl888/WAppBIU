import './mainView.css';
import LeftChat from './Left/LeftChat';
import RightChat from './Right/RightChat';
import { useState, useEffect } from 'react';
import activeUser from '../ManagingUsersList/activeUser';
function MainView() {
    const [conversationsActiveUser, setConversationsActiveUser] = useState(activeUser.conversations);
/*
    useEffect(()=>{
        fetch(`http://localhost:5030/api/Contacts`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          }, 
      }).then(res=>{
          if(res.ok){
            return res.json();
          } 
      }).then(data =>{
        setConversationsActiveUser(data)
        console.log(conversationsActiveUser);
      })
      },[]) */
    //const [conversationsActiveUser, setConversationsActiveUser] = useState(activeUser.conversations);
    const [contact, setContact] = useState(conversationsActiveUser[0].name);
    const [conversationNumber, setConversationNumber] = useState(0);
    const [conversation, setConversation] = useState(activeUser.conversations[conversationNumber]);
    const [conversationMessages, setConversationMessages] = useState(conversation.messages);
    const [lastMessage, setLastMessage] = useState(conversationMessages[conversationMessages.length-1].context);
    const [lastMessageType, setLastMessageType] = useState(conversationMessages[conversationMessages.length-1].type);


    const contactChange = (newName) => {
        setContact(newName);
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

                         />
                </span>
            </span>
        </form>
    );
}

export default MainView;