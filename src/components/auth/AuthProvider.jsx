import React, { useContext, useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = (username, password) => {
    setUser({ username });
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}  
    </AuthContext.Provider>
  );
};

export default AuthProvider;
