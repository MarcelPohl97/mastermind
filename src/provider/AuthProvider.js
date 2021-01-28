import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';

const AuthContext = React.createContext();

const AuthProvider = (props) => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider};