import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import GoogleLoginButton from "../components/GoogleLoginButton";
import { loginUser } from "../api/api";
import type { LoginRequest } from "../types/global";


const LoginPage: React.FC = () => {
  const navigate = useNavigate();
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
      if (data.user) {
        auth?.login(data.user, data.access_token);
        navigate("/");
      }
    } catch (err: any) {
      setError(err.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center  bg-green-50 dark:bg-gray-900 transition-colors duration-500">
   

      <div className="w-full max-w-md rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-xl transition-colors duration-500">
        <h1 className="text-3xl font-bold text-center text-green-700 dark:text-green-400 mb-6">
          SmartKrishi Login
        </h1>

        {error && (
          <p className="mb-4 rounded-lg bg-red-100 dark:bg-red-800 px-3 py-2 text-center text-sm text-red-600 dark:text-red-200 border border-red-300 dark:border-red-600">
            {error}
          </p>
        )}

        <form className="space-y-5" onSubmit={handleForm}>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-3 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 p-3 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full rounded-lg bg-green-600 py-3 font-semibold text-white transition duration-200 hover:bg-green-700 ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <div className="relative flex items-center justify-center my-4">
            <span className="h-px w-full bg-gray-200 dark:bg-gray-700"></span>
            <span className="absolute bg-white dark:bg-gray-800 px-3 text-sm text-gray-500 dark:text-gray-400 transition-colors duration-500">
              or
            </span>
          </div>

          <GoogleLoginButton />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
