import React, { createContext, useState, useEffect} from "react";
import type { ReactNode } from "react";
import type { User } from "../types/global";

interface AuthContextType{
    user:User |null;
    token:string |null;
    isLoggedIn:boolean; 
    login:(userData:User,tokenData:string)=>void;
    logout:()=>void;
    
}
interface AuthProviderProps{
    children:ReactNode;
}

export const AuthContext = createContext<AuthContextType |null >(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData: any, tokenData: string) => {
    localStorage.setItem("token", tokenData);
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    setToken(tokenData);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setToken(null);
  };

  const isLoggedIn = !!token;

  return (
    <AuthContext.Provider value={{ user, token, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
