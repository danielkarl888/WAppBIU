function SubmitStartScreen() {
    return (
      <div className="col-xl-11 col-lg-10 col-md-8 input-padding-5 p-3">
        <button type="submit" className="btn btn-primary btn-karl" id="login-btn">
          <i className="bi bi-chat-left-dots-fill"></i> Login</button>
        <span className="p-3">not registered? <a className="link">Click here</a> to register</span>
      </div>
    );
}
export default SubmitStartScreen;