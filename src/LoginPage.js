import PasswordInput from './Inputs/PasswordInput';
import SubmitLoginScreen from './Inputs/SubmitLoginScreen';
import UserNameInput from './Inputs/UserNameInput';
import DisplayNameInput from './Inputs/DisplayNameInput';
import SubmitRegisScreen from './Inputs/SubmitRegisScreen';

function LoginPage(){
    return (
        <>
            <form className="col card mt-2" id="conncectCard"> 
            <UserNameInput/>
            <PasswordInput/>
            <SubmitLoginScreen action1="Login" question="Not registered?" action2="to register"/>
            </form>
        </>
    );
}
export default LoginPage;