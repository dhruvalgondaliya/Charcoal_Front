import { Link, useNavigate } from "react-router-dom";
import CommanInput from "../Component/CommanComponent/CommanInput";
import { toast, ToastContainer } from "react-toastify";
import { API_URL } from "../Component/Server/Server";
import Logo from "../assets/Logo.png";
import { useState } from "react";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${API_URL}user/login`, {
        Email,
        Password,
      });
      console.log("testing data for login:",res.data);
  
      toast.success("User Login Successfully");
      // Store token in localstore
      const token = res.data.token;
      const role=res.data.user.role;
      
      localStorage.setItem("token", token);
      localStorage.setItem("role",role)
      
      setEmail("");
      setPassword("");

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      const errMessage = error.response?.data?.message || "Login failed!";
      const errDetails = error.response?.data?.errors;

      console.error("Login failed:", errDetails || errMessage);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={1000} />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form
          onSubmit={loginUser}
          className="w-full max-w-md bg-white p-6 rounded-xl shadow-md"
        >
          <div className="w-full flex justify-center mb-6">
            <img
              src={Logo}
              alt="Logo"
              className="w-32 h-auto sm:w-40 md:w-48 lg:w-56 object-contain"
            />
          </div>
          <div>
            <CommanInput
              label="Email"
              name="Email"
              type="email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
            />
          </div>
          <div>
            <CommanInput
              label="Password"
              name="Password"
              type="password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-4 bg-[var(--color-primary)] text-white py-2 rounded-full hover:bg-[var(--color-primary)] transition cursor-pointer"
          >
            Login
          </button>
          <div className="mt-4 text-center">
            <Link to="/registration" className="transition">
              Don't have an account?{" "}
              <span className="text-sm text-blue-600 hover:underline hover:text-blue-800 cursor-pointer">
                Register here
              </span>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
