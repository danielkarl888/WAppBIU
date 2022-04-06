import './mainView.css';
import LeftChat from './Left/LeftChat';
import RightChat from './RightChat';

function MainView() {
    return (
        <div className='container chat'>
            <div className='row chat-one'>
                <div className="col-lg-4 leftside"> <LeftChat /></div>
                <div className="col  rightside pull-right"> <RightChat /></div>
            </div>
        </div>
    );
  }
  
  export default MainView;