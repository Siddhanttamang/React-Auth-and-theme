import React, {useContext, useState } from 'react'
import GoogleLoginButton from '../components/GoogleLoginButton';
import { AuthContext } from '../context/AuthContext';
import { loginUser, type LoginRequest } from '../api/api';
import "../index.css"
const LoginPage: React.FC = () => {
  const auth = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const request: LoginRequest = { email, password };
      const data = await loginUser(request);
      if(data.user){
        auth?.login(data.user, data.access_token);

      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex' >
      <h1>Login to smartkrishi</h1>
      <form className='login-form' onSubmit={handleForm}>
      {error && <p className='error-box'>{error}</p>}
        Email: 
        <input 
          type="text" 
          className='input-email' 
          
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        Password: 
        <input 
          type="password" 
          className='input-password' 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className='btn-submit' disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      <GoogleLoginButton/>
      </form>
    </div>

  );
};

export default LoginPage;
