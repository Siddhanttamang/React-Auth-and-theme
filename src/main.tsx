// main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
    <GoogleOAuthProvider clientId={clientId}>
      <ThemeProvider>
     <App />
      </ThemeProvider>
        
    </GoogleOAuthProvider>
  </AuthProvider>
  </React.StrictMode>
);
