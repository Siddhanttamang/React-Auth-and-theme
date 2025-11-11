import React, { Children, useContext, type JSX } from 'react'
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
interface ProtectedRouteProps {
  children: JSX.Element;
}
const ProtectedRoute:React.FC<ProtectedRouteProps> = ({children}) => {
    const auth= useContext(AuthContext);
    if(!auth) return null;
    if (!auth.isLoggedIn) return <Navigate to="/login" replace />; 
  
    return children;
}

export default ProtectedRoute
