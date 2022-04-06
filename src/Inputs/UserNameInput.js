function UserNameInput({newUser, handle}) {
    return (
        <div className="form-floating mb-3 input-padding-5">
        <input
          onChange={handle}
          type="text"
          className="form-control mt-2"
          id="floatingUser"
          placeholder="Username"
          name="userName">
          </input>
        <label htmlFor="floatingUser">Username</label>
      </div>
    );
}
export default UserNameInput;