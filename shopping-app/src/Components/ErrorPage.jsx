import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ErrorPage.css";

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="error-page">
      <div className="error-content">
        <h1>404</h1>
        <h2>Oops! Page Not Found</h2>
        <p>
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <button onClick={() => navigate("/")} className="home-btn">
          Go Back Home
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;
