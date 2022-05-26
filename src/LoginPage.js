import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import userList from './ManagingUsersList/userList';
import LinkToChat from "./LinkToChat";
import activeUser from "./ManagingUsersList/activeUser"
import axios from "axios";
function LoginPage(){
    var arr  =[]
    var arr2  =[]

    const [yes, setYes] = useState(false);
    const [nameExist, setNameExist] = useState(true);

    const [newUser, setNewUser] = useState({
        userName: "",
        password: "",
    });
    const [isExist, setIsExist] = useState(true);

    useEffect(()=>{
        fetch(`http://localhost:5030/api/Users/UserExistCheck/${newUser.userName}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain'
            }, 
        }).then(res=>{
            if(res.ok){
                setIsExist(false);  
            } else {
                setIsExist(true);  
            }
        })
    },[newUser.userName])

    
    const handleUserNameChange = (event) => {
        setNewUser({ ...newUser, userName: event.target.value })
    }
    const handlePasswordChange = (event) => {
        setNewUser({ ...newUser, password: event.target.value })
    }
    function addZero(i) {
        if (i < 10) { i = "0" + i }
        return i;
    }

    const handleSubmit = (event, newUser) => {
        event.preventDefault();
        fetch('http://localhost:5030/api/Users/Login', {
            method: 'POST',
                headers: {
                'Content-Type': 'application/json   '

            },
            body: JSON.stringify({  "userName": newUser.userName,
                                    "password": newUser.password
          }) 
        }).then(res=>{
            if(res.ok){
                setYes(true);
                activeUser.userName = newUser.userName;
                displayFetch(activeUser);
                conatctsFetch(activeUser);
                console.log(activeUser);
            }
        })
    }
    
    const displayFetch = (activeUser)=>{
        fetch(`http://localhost:5030/api/Users/${newUser.userName}`,  {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res=>res.json()).then((data)=>{activeUser.display=data.displayName; })
    }
    const conatctsFetch = (activeUser)=>{
        fetch(`http://localhost:5030/api/Contacts/?user=${activeUser.userName}`,  {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res=>res.json())
            .then((data)=>{
                arr =[];
                data.map((contact, index)=> {
                   const x = {   username: contact.id,
                                 name: contact.name,
                                 server: contact.server,
                                 last: contact.last,
                                 lastDate: contact.lastDate,
                                 messages: []}
                    messagesFetch(x, contact.id);
                    arr.push(x);
                })
                if (arr.length != 0) {
                    activeUser.conversations = arr;
                } else {
                    activeUser.conversations = [{
                        username: "", name: "", server: "", last: "", lastDate: "",
                        messages: [{ src: "send", type: "text", context: "", time: "", id: "" }]
                    }]
                }    
                
                console.log(activeUser);
         })
    }
    const messagesFetch = (x2, user)=>{
        fetch(`http://localhost:5030/api/Contacts/${user}/messages/?user=${activeUser.userName}`,  {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res=>res.json())
            .then((data)=>{
                arr2 =[];
                data.map((message, index)=> {
                    var date = new Date(Date.parse(message.created));

                   const y = {  src: message.sent ? "send" : "recv" ,
                                type: "text",
                                context: message.content,
                                time: (addZero(date.getHours()) + ":" + addZero(date.getMinutes()) + "\n" +
                                      date.getUTCDate() + "/" + addZero((date.getMonth() + 1))+ "/" + date.getFullYear()),
                                id:message.id}
                    //var date = new Date(Date.parse(message.created));
                    console.log(date.getHours() + ":" + date.getMinutes() + "\n" +
                    (date.getUTCDate() + "/" + (date.getMonth() + 1)+ "/" + date.getFullYear()));              
                    arr2.push(y);
                })
                //console.log(arr2);
                x2.messages=arr2;
                //activeUser.conversations[contactNumber].messages = arr2;
                console.log(activeUser);
         })
    }
   
    return (
        <>
        <div className="col-2"></div>
        <form
        autoComplete="off"
        onSubmit={e => handleSubmit(e, newUser)}
        className="col card mt-2"
        id="conncectCard"> 
            <div className="text-center">
                <h1 className="display-3">Login</h1>
            </div>
            <div className="form-floating mb-3 input-padding-5">
                <input
                    onChange={handleUserNameChange}
                    type="text"
                    className="form-control mt-2"
                    id="floatingUser"
                    placeholder="Username"
                    name="userName"
                    value={newUser.userName}>
                </input>
                {isExist ? <div className="m-1 badge rounded-pill bg-danger">user name is not registered!</div> : null}
                <label htmlFor="floatingUser" className="fs-4">Username</label>
            </div>
            <>
                <div className="form-floating mb-3 input-padding-5">
                    <input
                        onChange={handlePasswordChange}
                        type="password"
                        className="form-control mt-2"
                        id="floatingPassword"
                        placeholder="Password"
                        name="Password"
                        value={newUser.password}>
                    </input>
                    {/*(isExistUsername(newUser.userName)) && !isValidUser(newUser) ? <div className="m-1 badge rounded-pill bg-danger">Password is incorrect!</div> : null*/}
                    <label htmlFor="floatingPassword" className="fs-4">Password</label>
                </div>
            </>
            <div className="form-floating mb-3 input-padding-5 p-3 " id="login">


                    <div className="text-center fs-5" id="submit">
                        <span>not Registered? <Link to='/regi' className="link" id="changeToRegister">
                            Click here</Link> to Register!</span>
                    </div>
                    <div className="d-flex justify-content-center">
                <div className="col-3"></div><button type="submit" className="btn btn-primary btn-karl fs-4 m-3">Login</button><div className="col-3"></div>
                </div>
                {yes ? <LinkToChat /> : null}

                
            </div>
        </form>
        <div className="col-2"></div>

        </>
    );
}
export default LoginPage;