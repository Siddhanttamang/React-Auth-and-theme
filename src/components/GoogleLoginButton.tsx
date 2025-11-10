import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

export type GooglePayload = {
  name?: string;
  email?: string;
  picture?: string;
  
};


const GoogleLoginButton: React.FC = () => {
  const handleSuccess = (res: any) => {
    if (!res.credential) return;

    const decoded: GooglePayload = jwtDecode(res.credential);
    localStorage.setItem("googleUser", JSON.stringify(decoded));
    console.log("Google Profile:", decoded);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login with Google</h2>
      <GoogleLogin onSuccess={handleSuccess} onError={() => console.log("Login Failed")} />
    </div>
  );
};

export default GoogleLoginButton;
