import DisplayInput from './Inputs/DisplayInput';
import PasswordInput from './Inputs/PasswordInput';
import SubmitStartScreen from './Inputs/SubmitStartScreen';
import UsernameInput from './Inputs/UserNameInput';

function FormStartScreen() {
    return (
        <form className="col card mt-2" id="conncectCard">
        <UsernameInput/>
        <PasswordInput/>
        <DisplayInput/>
        <SubmitStartScreen/>
        </form>
    );
}
export default FormStartScreen;