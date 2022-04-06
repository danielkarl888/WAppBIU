import React from "react";
import {useState} from 'react';
function SubmitLoginScreen({action1, action2, question}) {    
    return (
      <div className="form-floating mb-3 input-padding-5 p-3" id="login">
        <div className="col-xl-11 col-lg-10 col-md-8 input-padding-5 p-3" id="submit">
          <button type="submit" className="btn btn-primary btn-karl" id="login-btn">
            <i className="bi bi-chat-left-dots-fill"></i> {action1}</button>
          <span className="p-3">{question} <a className="link" id="changeToRegister">
            Click here</a> {action2}</span>
        </div>
      </div>
    );
}
export default SubmitLoginScreen;