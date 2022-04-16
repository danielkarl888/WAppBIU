import { Link } from "react-router-dom";
import { useState } from 'react';
import userList from './ManagingUsersList/userList';
function RegisterPage() {

    const [newUser, setNewUser] = useState({
        userName: "",
        display: "",
        password: "",
        conversations: [{ username: "", messages: [{ src: "", type: "", context: "", time: "" }]}]
    });
    const handleUserNameChange = (event) => {
        setNewUser({ ...newUser, userName: event.target.value })
        console.log(newUser.userName);
    }
    const handlePasswordChange = (event) => {
        setNewUser({ ...newUser, password: event.target.value })
        console.log(newUser.password);
    }
    const handleDisplayNameChange = (event) => {
        setNewUser({ ...newUser, display: event.target.value })
        console.log(newUser.display);
    }
    const [submitted, setSubmitted] = useState(false);
    const [successMessage, setSuccessMessage] = useState(false);
    const handleSubmit = (event, newUser) => {
        event.preventDefault();
        validAllandRegister(newUser);
        var bool = validAllandRegister(newUser);
        setNewUser({userName: "",
        display: "",
        password: "",
        conversations: [{ username: "", messages: [{ src: "", type: "", context: "", time: "" }]}]});
        console.log(bool);
        if(bool){
            console.log("succedd!!");
            setSubmitted(true);
        } else {
            setSubmitted(false);
        }
    }
    const validPassword = (newPassword)=>{
        if (!(/\d/.test(newPassword) && /[a-zA-Z]/.test(newPassword))) {
            return false;
        } else{
            return true;
        }
    }
    const validUsername = (uname)=>{
        for(var i=0; i<userList.length; i++) {
            if (uname===userList[i].userName){
                return false;
            }
        }
        return true;
    }
    const validAllandRegister = (newUser)=>{
        if (validPassword(newUser.password) && validUsername(newUser.userName)){
            userList.push(newUser);
            setSuccessMessage(true);
            console.log(userList[userList.length - 2])
            console.log(userList[userList.length - 1])
            return true;
        }
        return false;
    }
   
    return (
        <>
        <form
        autoComplete="off"
        onSubmit={e => handleSubmit(e, newUser)}
        className="col card mt-2"
        id="conncectCard">
        <div className="text-center">
         <h1 className="display-3">Register</h1>
         </div>


        {(successMessage) ? <div className="alert alert-success alert-dismissible" role="alert"><strong>Registerion has been completed!</strong> Please go back to <Link to="/">Login screen</Link></div> : null}
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
                {(!validUsername(newUser.userName) && !submitted && newUser.userName!="") ? <div className=" m-1 badge rounded-pill bg-danger">please select a uniqe user name!</div> : null}
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
                    {(!validPassword(newUser.password)  && !submitted && newUser.userName != "") ? <div className="m-1 badge rounded-pill bg-danger">please select at least 1 letter and 1 number!</div> : null}
                    <label htmlFor="floatingPassword" className="fs-4">Password</label>
                </div>
            </>
            <div className="form-floating mb-3 input-padding-5 ">
                <input
                onChange={handleDisplayNameChange}
                type="text"
                className="form-control mt-2"
                id="floatingDisplay"
                value={newUser.display}
                 placeholder="Display Name"></input>
                <label htmlFor="floatingDisplay" className="fs-4">Display Name</label>
            </div>

            <div className="form-floating mb-3 input-padding-5 p-3" id="register">
                <div className="col-7" id="submit">
                    <button  type="submit" className="btn btn-primary btn-karl offset-6 fs-4 mb-3" id="register-btn">
                        <i className="bi bi bi-pen-fill"></i> Register</button>
                </div>
                <div className="row">
                <div className='col-4'></div>
                <div className="col fs-5" id="submit" >Already Registered? <Link to='/' className="link" id="changeToLogin">Click here</Link> to Login</div>
                <div className='col-2'></div>
                </div>
            </div>
        </form>

        </>
    );
}
export default RegisterPage;