import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const [userdata, setUserdata] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
  });
  const handleChange = (e) => {
    setUserdata((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };

  const success = () => toast.success("User registered successfully!");
  const userError = () => toast.error("User already in use. Login to continue");
  const error = () => toast.error("Some error occured!");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/signup", {
      method: "POST",
      body: JSON.stringify({
        name: userdata.name,
        email: userdata.email,
        password: userdata.password,
        age: userdata.age,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.status === 201) {
          success();
          setUserdata({
            name: "",
            email: "",
            password: "",
            age: "",
          });
        } else userError();
      })
      .catch((err) => error());
  };

  return (
    <section className="container">
      <div className="child_container">
        <h1 className="register_name">NutriSign</h1>
        <form className="register_form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="register_input"
            name="name"
            onChange={handleChange}
            value={userdata.name}
            placeholder="Enter your name"
            required
          />
          <input
            type="email"
            className="register_input"
            placeholder="Enter your e-mail"
            name="email"
            value={userdata.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            className="register_input"
            placeholder="Enter your password"
            value={userdata.password}
            name="password"
            onChange={handleChange}
            required
          />
          <input
            type="number"
            className="register_input"
            placeholder="Enter your age"
            value={userdata.age}
            name="age"
            onChange={handleChange}
            required
          />
          <button type="submit" className="register_btn">
            Register
          </button>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
      <Toaster />
    </section>
  );
};

export default Register;
