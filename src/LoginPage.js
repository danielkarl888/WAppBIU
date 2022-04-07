import { Link } from "react-router-dom";
import { useState } from 'react';
import userList from './ManagingUsersList/userList';

 
function LoginPage(){
    const ConditionalLink = ({ children, to, condition }) => (!condition && to)
      ? <Link to={to}>{children}</Link>
      : <>{children}</>;

    const [newUser, setNewUser] = useState({
        userName: "",
        display: "",
        password: "",
        img: ""
    });
    const [correctPassword, setCorrectPassword] = useState(false);
    const [correctUserName, setCorrectUserName] = useState(false);

    const handleUserNameChange = (event) => {
        setNewUser({ ...newUser, userName: event.target.value })
        console.log(newUser.userName);
    }
    const handlePasswordChange = (event) => {
        setNewUser({ ...newUser, password: event.target.value })
        console.log(newUser.password);
    }

    const [submitted, setSubmitted] = useState(false);
    const [successMessage, setSuccessMessage] = useState(false);
    const handleSubmit = (event, newUser) => {
        event.preventDefault();
        setNewUser({userName: "",
        display: "",
        password: "",
        img: ""});
    }
    const isValidUser = (newUser)=>{
        if(!isExistUsername(newUser.userName)){
            return false;
        }
        for(var j =0; j<userList.length;j++){
            if(newUser.password == userList[j].password && newUser.userName == userList[j].userName){
                return true;
            }
        }
        return false;
    }
    const isExistUsername = (uname)=>{
        for(var i=0; i<userList.length; i++) {
            if (uname==userList[i].userName){
                return true;
            }
        }
        return false;
    }

   
    return (
        <form
        onSubmit={e => handleSubmit(e, newUser)}
        className="col card mt-2"
        id="conncectCard"> 
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
                <label htmlFor="floatingUser">Username</label>
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
                    {(isExistUsername(newUser.userName)) && !isValidUser(newUser) ? <div className="validation m-1">Password is incorrect!</div> : null}
                    <label htmlFor="floatingPassword">Password</label>
                </div>
            </>
            <div className="form-floating mb-3 input-padding-5 p-3" id="login">
                <div className="col-xl-11 col-lg-10 col-md-8 input-padding-5 p-3" id="submit">
                    <ConditionalLink to='/chat' condition={(newUser)=>isValidUser(newUser)}>
                        <button type="submit" className="btn btn-primary btn-karl" id="login-btn">
                            <i className="bi bi-chat-left-dots-fill"></i> Login</button>
                    </ConditionalLink>
                    <span className="p-3">not Registered? <Link to='/regi' className="link" id="changeToRegister">
                        Click here</Link> to Register</span>
                </div>
            </div>
        </form>
    );
}
export default LoginPage;