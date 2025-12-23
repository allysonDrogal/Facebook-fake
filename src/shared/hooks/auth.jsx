import React, { createContext, useCallback, useState, useContext } from 'react';

import { acesso } from '../../api/Users';
import { environment } from '../env';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
  const storedUser = JSON.parse(localStorage.getItem(environment.APP_NAME));
   if (storedUser) {
    return { 
      user: storedUser.user,
      token: storedUser.token
     };
   }
   return undefined;
  }, []);

  const login = useCallback(async ({ email, password }) => {
    const response = await acesso({ email, password });

   const { token, email: userEmail, name } = response;
   const user = { email: userEmail, name }; // Cria o objeto user


    localStorage.setItem(environment.APP_NAME, JSON.stringify({ token, user }));
    setData({ token, user });
  }, []);

   const signOut = useCallback(() => {
    localStorage.removeItem(environment.APP_NAME);
    setData(undefined);
    console.log('signOut');
  }, []);
  return (
    <AuthContext.Provider value={{ login, signOut, user: data?.user, token: data?.token }}>
    {children}
  </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthContext, useAuth };