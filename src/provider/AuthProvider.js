import React, { useState, } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

const AuthContext = React.createContext();

const AuthProvider = (props) => {
  const [user, loading, error] = useAuthState(auth);

  const redirect = async (history, message, direction) => {
    await alert(message)
    await history.push(direction)
  }

  const check_authenticated_user = (history, user, message, redirect_direction) => {
    if(user) {
        redirect(history, message, redirect_direction);
    }
}

  const logout = () => {
    auth.signOut();
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        redirect,
        check_authenticated_user,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider};