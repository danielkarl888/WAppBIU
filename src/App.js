import './App.css';
import FormStartScreen from './FormStartScreen';
import LoginPage from './LoginPage';
import {useState} from 'react';
import UserNameInput from './Inputs/UserNameInput';
function App() {
    return (

      <div className="container-fluid">
      <div className="row">

        <div className="col-2">
        </div>
        <FormStartScreen/>
        <div className="col-2">
        </div>
      </div>
    </div>
    );
}
export default App;
