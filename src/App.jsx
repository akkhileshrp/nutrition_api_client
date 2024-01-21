import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Private from "./components/Private";
import NotFoundPage from "./components/NotFoundPage";
import { AuthContext } from "./context/AuthContext";
import Track from "./components/Track";
import "./App.css";

const App = () => {
  const [loggedUser, setLoggeduser] = useState(
    JSON.parse(localStorage.getItem("user-data"))
  );
  return (
    <>
      <AuthContext.Provider value={{ loggedUser, setLoggeduser }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/track" element={<Private Component={Track} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AuthContext.Provider>
    </>
  );
};

export default App;
