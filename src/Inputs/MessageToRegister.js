import React, { useRef } from 'react';
import { useState } from 'react';
function MessageToRegister(){
    const [question, setQuestion] = useState("Not registered");
    const [action1, setAction1] = useState("Login");
    const [action2, setAction2] = useState("Register");
    const [icon, setIcon] = useState("bi bi-chat-left-dots-fill");

    var b = true;
    const handleClick = (bool)=>{
        if(bool){
            setQuestion("Already registered");
            setAction1("Register");
            setAction2("Login");
            b = false;
            setIcon("bi bi-pen-fill");
        } else {
            setQuestion("Not registered");
            setAction1("Login"); 
            setAction2("Register");
            b = true;   
            setIcon("bi bi-chat-left-dots-fill");
        }
    }
    return(
        <>
        <div className="col-xl-11 col-lg-10 col-md-8 input-padding-5 p-3">
        <button type="submit" className="btn btn-primary btn-karl" id="login-btn">
        <i className={icon}></i> {action1}</button>
        <span className="p-3">{question}? <a onClick={()=>{handleClick(b)}} className="link">Click here</a> to {action2}</span>
        </div>
        </>
    );
}
export default MessageToRegister;
