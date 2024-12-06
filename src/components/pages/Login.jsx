import React from "react";
import { useAuth } from "../auth/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login("Tai Nuth", "12345");
    navigate("/");
  };
  return (
    <div className="h-[100vh] flex flex-col gap-8 justify-center items-center">
      <h1 className="text-5xl font-bold">Login</h1>
      <button
        onClick={handleLogin}
        className="text-xl font-semibold px-4 py-2 rounded-lg bg-blue-600 text-white"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
