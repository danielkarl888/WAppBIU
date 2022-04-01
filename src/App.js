import './App.css';

function App() {
  return (
    <div class="container-fluid">
    <div class="row">
      <div class="col-2">

      </div>
      <div class="col card mt-2" id="conncectCard">
        <div class="form-floating mb-3 input-padding-5">
          <input type="text" class="form-control mt-2 " id="floatingInput" placeholder="Username"></input>
          <label for="floatingInput">Username</label>
        </div>
        <div class="form-floating mb-3 input-padding-5">
          <input type="password" class="form-control mt-2" id="floatingPassword" placeholder="Password"></input>
          <label for="floatingPassword">Password</label>
        </div>
        <div class="form-floating" id="addRegister">
          <input type="text" class="form-control mt-2" id="displayName" placeholder="Display name"></input>
          <label for="displayName">Display name</label>
        </div>
        <div class="row" id="rowLogin">
          <div class="col-11 input-padding-5 p-3">
            <button type="submit" class="btn btn-primary btn-karl" id="login-btn">Login</button>
            <span class="p-3">not registered? <a onmouseover="console.log(10)" href="" onclick="console.log(5)">Click
                here</a> to register</span>
          </div>
        </div>
        <div class="row" id="rowRegister">
          <div class="col-11 input-padding-5 p-3">
            <button type="submit" class="btn btn btn-primary btn-karl" id="register-btn">Register</button>
            <span class="p-3">Already registered? <a onmouseover="console.log(10)" href=""
                onclick="console.log(5)">Click here</a> to login</span>
          </div>
        </div>
      </div>
      <div class="col-2">
      </div>
    </div>
  </div>


  );
}

export default App;
