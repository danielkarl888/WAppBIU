import { useState, useEffect } from "react";
import activeUser from "../../ManagingUsersList/activeUser";
import ImageUpload from "./ImageUpload";
import VideoUpload from "./VideoUpload";
import VoiceUpload from "./VoiceUpload";
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

function ReplayRow({ conversationMessages, setConversationsActiveUser, setConversationNumber, setLastMessage, setLastMessageType, contact, setConversationMessages, conversation, server, setContact }) {
    async function fetchLastMessage(sender, recevier, newMessContent) {
        console.log(123);
        if (activeUser.userName == recevier && contact == sender) {
            var x = {
                src: "recv",
                type: "text",
                context: newMessContent,
                time: Date.now,
                id: ""
            }
            conversationMessages.push(x);
        }
    }
    
    /*
    async function fetchMessages() {
        var arr = [];
        var res2;
        let res = await fetch(`http://localhost:5030/api/Contacts/${contact}/messages/?user=${activeUser.userName}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        res2 = await res.json();
        console.log(res2);
        res2.map((conver) => {
            console.log("hii");
            var x = {
                src: "",
                type: "text",
                context: "",
                time: "",
                id: ""
            }
            var date = new Date(Date.parse(conver.created));

            x.src = conver.sent ? "send" : "recv"
            x.id = conver.id;
            x.context = conver.content;
            x.time= (addZero(date.getHours()) + ":" + addZero(date.getMinutes()) + "\n" +
            date.getUTCDate() + "/" + addZero((date.getMonth() + 1))+ "/" + date.getFullYear())
            //console.log(x);
        })
        console.log(res2);
        console.log(arr);

        //setConversationMessages(arr);
    }
    */
    
    const messagesFetch = ()=>{
        
        fetch(`http://localhost:5030/api/Contacts/${contact}/messages/?user=${activeUser.userName}`,  {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res=>res.json())
            .then((data)=>{
                var arr2 =[];
                data.map((message, index)=> {
                    var date = new Date(Date.parse(message.created));

                    const convertedMess = {
                        src: message.sent ? "send" : "recv",
                        type: "text",
                        context: message.content,
                        time: (addZero(date.getHours()) + ":" + addZero(date.getMinutes()) + "\n" +
                            date.getUTCDate() + "/" + addZero((date.getMonth() + 1)) + "/" + date.getFullYear()),
                        id: message.id
                    }
                    //var date = new Date(Date.parse(message.created));
                    /*
                    console.log(date.getHours() + ":" + date.getMinutes() + "\n" +
                    (date.getUTCDate() + "/" + (date.getMonth() + 1)+ "/" + date.getFullYear())); 
                    */             
                    arr2.push(convertedMess);
                })
                console.log(arr2);
                setConversationMessages(arr2);
                //activeUser.conversations[contactNumber].messages = arr2;
                //console.log(activeUser);
         })
    }

    const handleSendText = (event) => {
        event.preventDefault();
        console.log("contact is :" + contact);
        if (messageText.context != "" && contact != "") {
            fetch(`http://localhost:5030/api/Contacts/${contact}/messages/?user=${activeUser.userName}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json   '
                },
                body: JSON.stringify({
                    "content": messageText.context
                })
            }).then(res => {
                if (res.ok) {
                }
            })
            TransferFetch(server);
            //messagesFetch();
            conversationMessages.push(messageText);
            //console.log(connection.state);
            //connection.start();
            connection.invoke('Changed', messageText.context, messageText.time, activeUser.userName, contact);
        }
        setLastMessage(conversationMessages[conversationMessages.length - 1].context);
        //console.log(conversationMessages);
        setMessageText({
            src: "send",
            type: "text",
            context: "",
            time: "",
            id: ""
        });
        setLastMessageType("text");
    }

    const [connection, setConnection] = useState(null);
    useEffect(() => {
        const newConnection = new HubConnectionBuilder()
            .withUrl('http://localhost:5030/myHub')
            .withAutomaticReconnect()
            .build();
        setConnection(newConnection);

    }, []);
    useEffect(() => {
        if (connection) {
            connection.start()
                .then(result => {
                    console.log('Connected!');
                    connection.on('ChangeRecevied', (senderUser, recvUser, content, timeParam) => {
                        console.log("senderUser: " + senderUser);
                        console.log("recvUser: " + recvUser);
                        console.log("the active is " + activeUser.userName);
                        console.log("the current contact is " + contact);
                        if (activeUser.userName == recvUser) {
                            //setContact(username);
                            messageText.context = content;
                            messageText.time = timeParam;
                            messageText.src = "recv";
                            activeUser.conversations.map(conver=>{
                                if(conver.username==senderUser){
                                    conver.messages.push(messageText);
                                    setLastMessage(messageText.context);
                                    setContact(senderUser);
                                }
                            });
                            //console.log(conversationMessages);
                            //console.log(messageText);
                            // CHECK HERE
                            //var arr = conversationMessages;
                            //arr.push(messageText);
                            //setConversationMessages(arr);
                            //setConversationMessages(conversationMessages.push(messageText));
                            //let temp = [...conversationMessages];
                            //temp.push(messageText);
                            //setConversationMessages(temp);
                            //conversationMessages.push(messageText);
                           // console.log(conversationMessages);
                            //setLastMessage(conversationMessages[conversationMessages.length - 1].context);
                            setMessageText({
                                src: "send",
                                type: "text",
                                context: "",
                                time: "",
                                id: ""
                            });
                        }

                    });
                })
                .catch(e => console.log('Connection failed: ', e));
        }
    }, [connection]);


    const connectServer =  async ()=>{
        try {
            const newConnection = new HubConnectionBuilder()
            .withUrl('http://localhost:5030/myHub')
            .configureLogging(LogLevel.Information)
            .build();
            newConnection.on("recieveMessage", (sender, recevier, newMessContent)=>{
                fetchLastMessage(sender, recevier, newMessContent);
            })
            await newConnection.start();
            await newConnection.invoke("Connect");
            setConnection(newConnection);
        }catch(e){
            console.log(e);
        }
    }
    function addZero(i) {
        if (i < 10) { i = "0" + i }
        return i;
    }

    const TransferFetch = (server) => {
        fetch(`http://${server}/api/transfer`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "from": activeUser.userName,
                "to": contact,
                "content": messageText.context
            })
        })
    }
    const handleMessageChange = (event) => {
        var date = new Date();
        setMessageText({
            ...messageText, context: event.target.value, time: (addZero(date.getHours()) + ":" + addZero(date.getMinutes()) + "\n" +
                date.getUTCDate() + "/" + addZero((date.getMonth() + 1)) + "/" + date.getFullYear())
        })
        //console.log(messageText);
    }

    const [messageText, setMessageText] = useState(
        {
            src: "send",
            type: "text",
            context: "",
            time: "",
            id: ""
        }

    );
    //connectServer();
    return (
        <>
            <div className="row d-flex align-items-center reply">
                <div className="col-sm-1 col-xs-1 reply-paperclip">
                    <div className="btn-group dropup">
                        <button type="button" className="btn btn dropdown hiddenbtn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="bi bi-paperclip"></i>
                        </button>
                        <div className="dropdown-menu">
                            <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                <div className="btn-group-vertical mr-2" role="group" aria-label="First group">
                                    <button type="button" className="btnS " data-toggle="modal" data-target="#videoModal"><i className="bi bi-camera-video-fill" style={{ color: "black" }}></i></button>
                                    <button type="button" className="btnS" data-toggle="modal" data-target="#voiceModal"><i className="bi bi-mic-fill" style={{ color: "black" }}></i></button>
                                    <button type="button" className="btnS" data-toggle="modal" data-target="#imageModal"><i className="bi bi-image" style={{ color: "black" }}></i></button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-10 col-xs-9 replymain">
                    <input
                        onChange={handleMessageChange}
                        value={messageText.context}
                        autoComplete="off"
                        className="form-control  textarea" rows="1" id="comment" placeholder="type a message..."></input>
                </div>
                <div className="col-sm-1 col-xs-1 reply-send">

                    <button type="submit" onClick={handleSendText} className="btn-bg-transparent hiddenbtn">  <i className="bi bi-send-fill" aria-hidden="true"></i> </button>

                </div>
            </div>
            <ImageUpload conversationMessages={conversationMessages}
                setLastMessage={setLastMessage}
                setLastMessageType={setLastMessageType}
                contact={contact}
            />
            <VideoUpload
                conversationMessages={conversationMessages}
                setLastMessage={setLastMessage}
                setLastMessageType={setLastMessageType}
                contact={contact}
                setConversationMessages={setConversationMessages}

            />
            <VoiceUpload
                conversationMessages={conversationMessages}
                setLastMessage={setLastMessage}
                setLastMessageType={setLastMessageType}
                contact={contact}
                setConversationMessages={setConversationMessages}
            />

        </>
    );
}
export default ReplayRow;
