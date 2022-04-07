import './mainView.css';
import LeftChat from './Left/LeftChat';
import RightChat from './Right/RightChat';

function MainView() {
    return (
        <form className="col mt-2 conncectCard" id="conncectCard"> 
            <div className='row chat-one'>
                <div className="container-fluid col-lg-4 leftside"> <LeftChat /></div>
                <div className="container-fluid col  rightside pull-right"> <RightChat /></div>
            </div>
        </form>
    );
  }
  
  export default MainView;