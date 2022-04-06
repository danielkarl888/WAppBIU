import LoginPage from './LoginPage';
import UserNameInput from './Inputs/UserNameInput';
import React from 'react';
import {useState} from 'react';
import RegisterPage from './RegisterPage';
function FormStartScreen () {

        return ( 
          <form className="col card mt-2" id="conncectCard"> 
          <RegisterPage/>
          <RegisterPage/>
          </form> 
        );
}
export default FormStartScreen;