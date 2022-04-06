import PasswordInput from './Inputs/PasswordInput';
import UserNameInput from './Inputs/UserNameInput';
import DisplayNameInput from './Inputs/DisplayNameInput';
import SubmitRegisScreen from './Inputs/SubmitRegisScreen';
import { Link } from "react-router-dom";
import { useState } from 'react';
import userList from './ManagingUsersList/userList';
function RegisterPage() {

    const [newUser, setNewUser] = useState({
        userName: "",
        display: "",
        password: "",
        img: ""
    });
    const handleUserNameChange = (event) => {
        setNewUser({ ...newUser, userName: event.target.value })
        console.log(newUser.userName);
    }
    const handleUserPasswordChange = (event) => {
        setNewUser({ ...newUser, password: event.target.value })
        console.log(newUser.password);
        validPassword(newUser.password);
    }
    const handleDisplayNameChange = (event) => {
        setNewUser({ ...newUser, display: event.target.value })
        console.log(newUser.display);

    }
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    }
    const validPassword = (newPassword)=>{
        if (!(/\d/.test(newPassword) && /[a-zA-Z]/.test(newPassword))) {
            return false;
        } else{
            return true;
        }
    }
    const validUsername = (uname)=>{
        userList.map((user, key)=>{
            if(uname == user.userName)
            return false;
        }
        );
        return true;
    }

    
    return (
        <form
        onSubmit={handleSubmit} className="col card mt-2" id="conncectCard"> 
        {submitted ? <div>registerion completed! please go back to login screen</div> : null}
        
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
                {(submitted && !validUsername(newUser.userName)) ? <div className="validation m-1">please select a uniqe user name!</div> : null}

                <label htmlFor="floatingUser">Username</label>
            </div>
            <>
                <div className="form-floating mb-3 input-padding-5">
                    <input
                        onChange={handleUserPasswordChange}
                        type="password"
                        className="form-control mt-2"
                        id="floatingPassword"
                        placeholder="Password"
                        name="Password"
                        value={newUser.password}>
                    </input>
                    {(submitted && !validPassword(newUser.password)) ? <div className="validation m-1">please select at least 1 letter and 1 char!</div> : null}

                    <label htmlFor="floatingPassword">Password</label>
                </div>
            </>
            <div className="form-floating mb-3 input-padding-5">
                <input
                onChange={handleDisplayNameChange}
                type="text"
                className="form-control mt-2"
                id="floatingDisplay"
                value={newUser.display}
                 placeholder="Display Name"></input>
                <label htmlFor="floatingDisplay">Display Name</label>
            </div>
            <div className="form-floating mb-3 input-padding-5 p-3" id="register">
                <div className="col-xl-11 col-lg-10 col-md-8 input-padding-5 p-3" id="submit">
                    <button  type="submit" className="btn btn-primary btn-karl" id="register-btn">
                        <i className="bi bi bi-pen-fill"></i> Register</button>
                    <span className="p-3">Already Registered? <Link to='/' className="link" id="changeToLogin">Click here</Link> to Login</span>
                </div>
            </div>
        </form>
    );
}
export default RegisterPage;