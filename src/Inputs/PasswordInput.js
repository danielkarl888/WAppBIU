function PasswordInput() {
    return (
      <>
        <div className="form-floating mb-3 input-padding-5">
        <input type="password" className="form-control mt-2" id="floatingPassword" placeholder="Password"></input>
        <label htmlFor="floatingPassword">Password</label>
      </div>
      </>
    );
}
export default PasswordInput;