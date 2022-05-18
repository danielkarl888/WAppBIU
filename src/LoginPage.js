import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import userList from './ManagingUsersList/userList';
import LinkToChat from "./LinkToChat";
import activeUser from "./ManagingUsersList/activeUser"
import axios from "axios";
function LoginPage(){
    
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
    
    useEffect(()=>{
        fetch(`http://localhost:5030/api/Contacts`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }, 
        }).then(res=>{
            if(res.ok){
                res.json();  
            } 
        }).then(data=>console.log())
    },[yes])


    
    const handleUserNameChange = (event) => {
        setNewUser({ ...newUser, userName: event.target.value })
    }
    const handlePasswordChange = (event) => {
        setNewUser({ ...newUser, password: event.target.value })
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
                console.log(activeUser);
            }
        })
    }
    /*
    const displayFetch = ()=>{
        fetch(`http://localhost:5030/api/Users/${newUser.userName}`,  {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(res=>res.json()).then((data)=>{console.log(data); })
    }*/
    const isValidUser = (newUser)=>{
        /*
        if(!isExistUsername(newUser.userName)){
            return false;
        }
        */
        for(var j =0; j<userList.length;j++){
            if(newUser.password == userList[j].password && newUser.userName == userList[j].userName){
                activeUser.userName = userList[j].userName;
                activeUser.display = userList[j].display;
                activeUser.conversations = userList[j].conversations;
                console.log(activeUser.conversations);
                return true;
            }
        }
        return false;
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
            <div className="form-floating mb-3 input-padding-5 p-3" id="login">


                    <div className="text-center fs-5" id="submit">
                        <span>not Registered? <Link to='/regi' className="link" id="changeToRegister">
                            Click here</Link> to Register!</span>
                    </div>
                <div className="col-3"></div><button type="submit" className="btn btn-primary btn-karl fs-4 m-3">Login</button><div className="col-3"></div>

                {yes ? <LinkToChat /> : null}

                
            </div>
        </form>
        <div className="col-2"></div>

        </>
    );
}
export default LoginPage;