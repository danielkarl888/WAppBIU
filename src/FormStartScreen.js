import LoginPage from './LoginPage';
import UserNameInput from './Inputs/UserNameInput';
import React from 'react';
import {useState} from 'react';
import RegisterPage from './RegisterPage';
import MainView from './ChatView/mainView';
function FormStartScreen () {

        return ( 
          <form className="col card mt-2" id="conncectCard"> 
          <MainView/>
          </form> 
        );
}
export default FormStartScreen;