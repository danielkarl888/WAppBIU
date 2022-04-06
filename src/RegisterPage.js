import PasswordInput from './Inputs/PasswordInput';
import SubmitLoginScreen from './Inputs/SubmitLoginScreen';
import UserNameInput from './Inputs/UserNameInput';
import DisplayNameInput from './Inputs/DisplayNameInput';
import SubmitRegisScreen from './Inputs/SubmitRegisScreen';

function RegisterPage(){
    return (
        <>
            <UserNameInput/>
            <PasswordInput/>
            <DisplayNameInput/>
            <SubmitRegisScreen/>
        </>
    );
}
export default RegisterPage;