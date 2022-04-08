import { Link } from "react-router-dom";

function LinkToChat() {
    return(
        <>
        <div className="row">
        <div className="col-3">
        </div>
        <Link className="col-6" to='/chat'>
        <button type="submit" className="btn btn-primary btn-karl" id="login-btn">
            <i className="bi bi-chat-left-dots-fill"></i> Login</button>
        </Link>        
        <div className="col-3"></div>
      </div>
        </>
    );
}
export default LinkToChat;