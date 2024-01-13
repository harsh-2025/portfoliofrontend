// Header.js

import React from "react";
// import './Header.css';  // Import your CSS file for styling
import "../styles/Header.css";
import { toast } from "react-toastify";

import { useUser } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
    toast.success("Logout successful");
  };
  return (
    <header className="app-header">
      <div className="header-content">
        <div className="left-section">
          <h1>Portfolio manage</h1>
        </div>
        <div className="middle-section">
          {/* Add navigation links for top stocks */}
          <nav>
            <a href="/">Home</a>
            <a href="/top-stocks">Top Stocks</a>
            {/* Add more links as needed */}
          </nav>
        </div>
        <div className="right-section">
          {user ? (
            <>
              <p>Welcome, {user.username}!</p>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <Link to="/login"><p className="right-section-button">Login</p></Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
