import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className="navbar">
            <nav className="navbar navbar-light bg-light justify-content-between">
            <div className="navbar-brand">
                <div className="navbar-light-green-line"></div>
                <div className="navbar-links">
                <a href="/product" className="btn btn-primary btn-sm btn-custom">Product</a>
                <a href="/about" className="btn btn-secondary btn-sm btn-custom">About</a>
                </div>
            </div>
            <div className="navbar-logout">
                <a href='/login' className="btn btn-light btn-sm">Logout</a>
            </div>
            </nav>
        </div>
    );
};

export default Navbar;