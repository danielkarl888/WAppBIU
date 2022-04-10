import './mainView.css';
import LeftChat from './Left/LeftChat';
import RightChat from './Right/RightChat';

function MainView() {
    return (
        <form className="container-fluid col mt-2 conncectCard" id="conncectCard"> 
            <span className='row chat-one' >
                <span className="col-4 leftside"> <LeftChat /></span>
                <span className="col  rightside"> <RightChat /></span>
            </span>
        </form>
    );
  }
  
  export default MainView;