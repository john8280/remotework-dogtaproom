import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: 'u1',
    name: 'Demo User',
    email: 'demo@example.com',
    membership: 'founder',
  });

  // mock sign in / sign out
  const signIn = (email, password) => {
    setUser({ id: 'u1', name: 'Demo User', email });
  };
  const signOut = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
