import React, { useContext, useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import type { GooglePayload } from "../types/global";
import { AuthContext } from "../context/AuthContext";
const GoogleLoginButton: React.FC = () => {
  const navigate= useNavigate();
  const auth=useContext(AuthContext);
  const handleSuccess = (res: any) => {
    if (!res.credential) return;

    const decoded: GooglePayload = jwtDecode(res.credential);
    auth?.googleLogin(decoded);
    console.log("Google Profile:", decoded);
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <GoogleLogin onSuccess={handleSuccess} onError={() => console.log("Login Failed")} />
    </div>
  );
};

export default GoogleLoginButton;
