import './RightChat.css';
import TopheadingRight from './TopHeadingRight';
import ChatBox from './ChatBox';
import ReplayRow from './RepleyRow';
import activeUser from '../../ManagingUsersList/activeUser';
import { useState } from 'react';
function RightChat({conversationsActiveUser, contact}) {
    return (
        <span>
            <TopheadingRight contact={contact}/>
            <ChatBox />
            
            <ReplayRow />
            
        </span>

    );
}

export default RightChat;