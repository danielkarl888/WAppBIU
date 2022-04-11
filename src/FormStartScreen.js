import LoginPage from './LoginPage';
import UserNameInput from './Inputs/UserNameInput';
import React from 'react';
import {useState} from 'react';
import RegisterPage from './RegisterPage';
import MainView from './ChatView/mainView';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
function FormStartScreen () {

        return ( 
         
          <> 
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LoginPage/>}></Route>
              <Route path="/regi" element={<RegisterPage/>}></Route>
              <Route path="/chat" element={<MainView/>}></Route>
            </Routes>
          </BrowserRouter>
          </>
          
        );
}
export default FormStartScreen;