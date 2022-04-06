import { Link } from "react-router-dom";

function SubmitRegisScreen() {
    return (
      <div className="form-floating mb-3 input-padding-5 p-3" id="register">
      <div className="col-xl-11 col-lg-10 col-md-8 input-padding-5 p-3" id="submit">
        <button type="submit" className="btn btn-primary btn-karl" id="register-btn">
        <i className="bi bi bi-pen-fill"></i> Register</button>
        <span className="p-3">Already Registered? <Link to='/' className="link" id="changeToLogin">Click here</Link> to Login</span>
        </div>
      </div>
    );
}
export default SubmitRegisScreen;