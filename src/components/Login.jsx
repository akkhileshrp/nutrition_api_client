import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const loggedUserData = useContext(AuthContext);
  const [logindata, setLogindata] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLogindata((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };

  const success = () => toast.success("Login successfull");
  const loginError = () => toast.error("Username or password is incorrect!");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/login", {
      method: "POST",
      body: JSON.stringify({
        email: logindata.email,
        password: logindata.password,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          success();
          setLogindata({
            email: "",
            password: "",
          });
        } else loginError();
        return response.json();
      })
      .then((data) => {
        if (data.token) {
          localStorage.setItem("user-data", JSON.stringify(data));
          navigate("/track");
          loggedUserData.setLoggeduser(data);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <section className="container">
      <div className="child_container">
        <h1 className="login_name">NutriLogin</h1>
        <form className="login_form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            className="login_input"
            value={logindata.email}
            name="email"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="login_input"
            value={logindata.password}
            name="password"
            onChange={handleChange}
            required
          />
          <button type="submit" className="login_btn">
            Login
          </button>
          <p>
            Don't have an account? <Link to="/register">Signup</Link>
          </p>
        </form>
      </div>
      <Toaster />
    </section>
  );
};

export default Login;
