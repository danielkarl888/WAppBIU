import React from "react";
import { Link } from "react-router-dom";
function SubmitLoginScreen({action1, action2, question, func}) {    
    return (
      <div className="form-floating mb-3 input-padding-5 p-3" id="login">
        <div className="col-xl-11 col-lg-10 col-md-8 input-padding-5 p-3" id="submit">
          <Link to='/chat'>
            <button type="submit" className="btn btn-primary btn-karl" id="login-btn">
              <i className="bi bi-chat-left-dots-fill"></i> {action1}</button>
          </Link>
          <span className="p-3">{question} <Link to ='/regi'className="link" id="changeToRegister">
            Click here</Link> {action2}</span>
        </div>
      </div>
    );
}
export default SubmitLoginScreen;