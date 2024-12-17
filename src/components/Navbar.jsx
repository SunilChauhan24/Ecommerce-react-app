import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from "react-router-dom";
import './navbar.css';
import "font-awesome/css/font-awesome.min.css";

const Navbar = () => {

   const [searchQuery, setSearchQuery] = useState("");
     const navigate = useNavigate(); 

   const handleSearchChange = (e) => {
     setSearchQuery(e.target.value);
   };

    const handleSearchSubmit = (e) => {
      e.preventDefault();
     navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
 
    };

    

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-logo">
          Thunder
        </Link>
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <form onSubmit={handleSearchSubmit} className="search-form">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
        <div className="cart-icon">
          <Link to="/cart">
            <i className="fa fa-shopping-cart"></i>{" "}
            {/* FontAwesome Cart Icon */}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
