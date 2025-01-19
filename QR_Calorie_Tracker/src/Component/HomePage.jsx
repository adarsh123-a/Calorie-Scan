import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../Images/logo.png";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <div className="main">
        {/* Navbar */}
        <div className="navbar">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="nav-buttons">
            <Link to="/home"><button>Home</button></Link>
            <Link to="/products"><button>Products</button></Link>
            <button>Logout</button>
          </div>
        </div>

        {/* Hero Section */}
        <div className="Hero">
          <div className="leftSection">
            <h1>Mindful eating, powerful living.</h1>
            <button>Scan QR</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
