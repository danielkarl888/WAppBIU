function UsernameInput() {
    
    return (
        <div className="form-floating mb-3 input-padding-5">
        <input type="text" className="form-control mt-2" id="floatingUser" placeholder="Username"></input>
        <label htmlFor="floatingUser">Username</label>
      </div>
    );
}
export default UsernameInput;