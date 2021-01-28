import React, { useState, useEffect } from 'react';
import './style/external.css';
import './style/main.css';
import Landing from './components/Landing';
import Register from './components/Register';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import Boards from './components/Boards';
import LoaderContainer from './components/LoaderContainer';
import Modal from './components/Modal';
import CardBoard from './components/CardBoard';
import Features from './components/Features'
import About from './components/About';
import How from './components/How';
import Gradients from './components/Gradients';
import { GlobalProvider } from './provider/GlobalProvider';
import { AuthProvider } from './provider/AuthProvider';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  
   
  return (
    <>
      <AuthProvider>
        <GlobalProvider>
          <Router>
              <Route exact path="/">
                <Landing /> 
              </Route>
              <Route exact path="/register">
                <Register /> 
              </Route>
              <Route exact path="/login">
                <Login /> 
              </Route>
              <Route exact path="/forgotpassword">
                <ForgotPassword /> 
              </Route>
              <Route excact path="/boards">
                <Boards />
              </Route>
              <Route excact path="/cardboard/:board_id">
                <CardBoard />
              </Route>
            </Router>
        </GlobalProvider>
      </AuthProvider>
    </>
  )
}

export default App;
