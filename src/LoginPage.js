import { Link } from "react-router-dom";
import { useState } from 'react';

import LinkToChat from "./LinkToChat";
import activeUser from "./ManagingUsersList/activeUser"
import { useEffect } from "react";
import axios from "axios";


function LoginPage(){
    
    const [list, setList] = useState([]);
    const [repo, setRepo] = useState([]);
    const [newUser, setNewUser] = useState({
        userName: "",
        password: "",
        password: "",
        conversations: ""
    });
    const [logUser, setlogUser] = useState({
        userName: "",
        display: "",
        password: "",
        conversations: "" 
    });


    useEffect(()=>{
        const func= async()=>{
            const res = await fetch('http://localhost:5030/api/Users');
            console.log(res);
            const data = await res.json();
            console.log(data);
            setList(data);
        }
        func();
    },[]);

   
        const getRepo= ()=>{
          axios.get('http://localhost:5030/api/Users')
            .then((response) => {
            console.log(response);
            const myRepo = response.data;
            setRepo(myRepo);
           });
        };
        
        useEffect(()=> getRepo(),[]);
        
        useEffect(()=>{
            const post= async()=>{
                const res = await axios.post('http://localhost:5030/Login',{userName: "yossi", password:"Yossi1"});
                setlogUser(res.data);
                console.log(res);
            }
            post();
        },[]);   
   

        // const handleSubmit1 = async (event) => {
        //     event.preventDefault();
        //     const user = {userName: "",
        //             display: "",
        //             password: "",
        //             conversations: ""};
        //         const response1 = await axios.post('http://localhost:5030/api/Users/Login',user);
        //         setNewUser(response1.data);
        //         console.log(response1.data);
            
        // }
    

        // Example POST method implementation:
// async function postData(url = '') {
//     // Default options are marked with *
//     const response = await fetch(url, {
//       method: 'POST', // *GET, POST, PUT, DELETE, etc.
//       mode: 'cors', // no-cors, *cors, same-origin
//       headers: {
//         'Content-Type': 'application/json'
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//            body: "JSON.stringify({userName: data.userName, password: data.password })" 
//     });
//     return response.json(); // parses JSON response into native JavaScript objects
//   }
  
//   postData('https://example.com/answer', { answer: 42 })
//     .then(data => {
//       console.log(data); // JSON data parsed by `data.json()` call
//     });
  

    
    const handleUserNameChange = (event) => {
        setNewUser({ ...newUser, userName: event.target.value })
        console.log(newUser.userName);
    }
    const handlePasswordChange = (event) => {
        setNewUser({ ...newUser, password: event.target.value })
        console.log(newUser.password);
    }
    const handleSubmit = (event, newUser) => {
        event.preventDefault();
        var bool = isValidUser(newUser)
        if(!bool){
            setNewUser({userName: "",
            display: "",
            password: "",
            conversations: ""});
        }
    }
    const isValidUser = (newUser)=>  {
        // const userData = {
        //     name: newUser.userName,
        //     password: newUser.password
        //   };
       
        // axios.post("http://localhost:5030/Login", userData)
        //   .then((response) => {
        //     console.log(response.status);
        //     console.log(response.data.token);
        //   });
      
        // await fetch('http://localhost:5030/Login', {
        //     method: 'POST', 
        //     mode: 'cors', 
        //     headers: {
        //     'Content-Type': 'application/json'
        //     // 'Content-Type': 'application/x-www-form-urlencoded',
        //     },
        //     body: JSON.stringify(newUser)
        // }).then(response => response.json())
        // .then(data => console.log(data))
        if(!isExistUsername(newUser.userName)){
            return false;
        }
        for(var j =0; j<list.length;j++){
            if(newUser.password == list[j].password && newUser.userName == list[j].userName){
                activeUser.userName = list[j].userName;
                activeUser.display = list[j].display;
                activeUser.conversations = list[j].conversations;
                console.log(activeUser.conversations);
                return true;
            }
        }
        return false;
    }
    const isExistUsername = (uname)=>{
        for(var i=0; i<list.length; i++) {
            if (uname==list[i].userName){
                return true;
            }
        }
        return false;
    }

   
    return (
        <>
        {list.map((value, index)=>{ 
            return <div>{value.password}</div>
            })}
         
         {repo.map((value, index)=>{ 
            return <div>{value.userName}</div>
            })}
         
           

        <div className="col-2"></div>
        <form
        autoComplete="off"
        onSubmit={e => handleSubmit(e, newUser)}
       // onSubmit={e=> handleSubmit1(e)}
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
                {(!isExistUsername(newUser.userName)) && newUser.userName!=='' ? <div className="m-1 badge rounded-pill bg-danger">user name is not registered!</div> : null}
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
                    {(isExistUsername(newUser.userName)) && !isValidUser(newUser) ? <div className="m-1 badge rounded-pill bg-danger">Password is incorrect!</div> : null}
                    <label htmlFor="floatingPassword" className="fs-4">Password</label>
                </div>
            </>
            <div className="form-floating mb-3 input-padding-5 p-3" id="login">


                    <div className="text-center fs-5" id="submit">
                        <span>not Registered? <Link to='/regi' className="link" id="changeToRegister">
                            Click here</Link> to Register!</span>
                    </div>

                {isValidUser(newUser) ? <LinkToChat /> : null}

                
            </div>
        </form>
        <div className="col-2"></div>

        </>
    );
}
export default LoginPage;