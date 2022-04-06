import './mainView.css';
import LeftChat from './Left/LeftChat';
import RightChat from './Right/RightChat';

function MainView() {
    return (
        <div className='container-fluid chat'>
            <div className='row chat-one'>
                <div className="container-fluid col-lg-4 leftside"> <LeftChat /></div>
                <div className="container-fluid col  rightside pull-right"> <RightChat /></div>
            </div>
        </div>
    );
  }
  
  export default MainView;