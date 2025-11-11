import React, { createContext, useState, useEffect} from "react";
import type { ReactNode } from "react";
import type { GooglePayload, User } from "../types/global";

interface AuthContextType{
    user:User |null;
    googleUser:GooglePayload |null;
    token:string |null;
    isLoggedIn:boolean; 
    googleLogin:(googleData:GooglePayload)=>void;
    login:(userData:User,tokenData:string)=>void;
    logout:()=>void;
    
}
interface AuthProviderProps{
    children:ReactNode;
}

export const AuthContext = createContext<AuthContextType |null >(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User |null>(null);
  const [googleUser,setGoogleUser]=useState<GooglePayload | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    const storedGoogleUser = localStorage.getItem("googleUser");
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }else if(storedGoogleUser){
      setGoogleUser(JSON.parse(storedGoogleUser));
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
    localStorage.removeItem("googleUser");
    setUser(null);
    setToken(null);
    setGoogleUser(null);
  
  };
  const googleLogin =(googleData:GooglePayload)=>{
    localStorage.setItem("googleUser",JSON.stringify(googleData));
    setGoogleUser(googleData);

  }

  const isLoggedIn = !!token ||!!googleUser;

  return (
    <AuthContext.Provider value={{ user, token, isLoggedIn, login, logout,googleLogin,googleUser }}>
      {children}
    </AuthContext.Provider>
  );
};
