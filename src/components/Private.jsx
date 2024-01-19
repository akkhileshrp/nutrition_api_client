import React from "react";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const Private = (props) => {
  const loggedUserData = useContext(AuthContext);
  return loggedUserData.loggedUser ? (
    <props.Component />
  ) : (
    <Navigate to="/login" />
  );
};

export default Private;
