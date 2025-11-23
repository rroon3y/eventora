import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Eventora</h1>
            <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#login">Login</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;