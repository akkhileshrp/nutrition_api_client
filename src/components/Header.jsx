import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const loggedUserData = useContext(AuthContext);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user-data");
    loggedUserData.setLoggeduser(null);
    navigate("/login");
  };
  return (
    <section>
      <ul>
        <li onClick={logout}>Logout</li>
      </ul>
    </section>
  );
};

export default Header;
