import './mainView.css';
import LeftChat from './LeftChat';
import RightChat from './RightChat';

function MainView() {
    return (
        <form className="col card mt-2" id="conncectCard"> 
        <div className='container chat'>
            <div className='row chat-one'>
                <div className="col-lg-4 leftside"> <LeftChat /></div>
                <div className="col  rightside pull-right"> <RightChat /></div>
            </div>
        </div>
        </form> 

    );
  }
  
  export default MainView;