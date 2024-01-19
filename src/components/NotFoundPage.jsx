import React from "react";
import "./NotFoundPage.css";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section className="container">
      <div className="child_container">
        <h3 className="error_text">404 - page not found</h3>
        <p className="error_desc">
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable
        </p>
        <button className="err_btn">
          <Link className="error" to="/login">
            Go to Home Page
          </Link>
        </button>
      </div>
    </section>
  );
};

export default NotFoundPage;
