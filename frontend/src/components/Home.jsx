import React from 'react';
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
 return (
    <div style={{backgroundImage : "none", backgroundColor: 'white'}} className="home-container d-flex flex-column justify-content-center align-items-center text-center vh-100">

        {/* Navbar with Logo */}
        <div style={{ position: 'absolute', top: '0', left: '0', right: '0', height: '60px', backgroundColor: '#00b106', display: 'flex', alignItems: 'center', padding: '0 10px' }}>
            <img src="./logo.png" alt="Logo" style={{ paddingTop: '10px', height: '125px',width: '125px'}} />
            {/* About and Product links */} 
            <div style={{ position: 'absolute', top: '30px', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', gap: '10px', justifyContent: 'center' }}>
                <Link to='/home' style={{ textDecoration: 'none', color: 'white', paddingRight: '20px' }}>Home</Link>               
                <Link to='/product' style={{ textDecoration: 'none', color: 'white', paddingRight: '20px' }}>Product</Link>
            </div>
        </div>

        {/* Logout button in the upper right corner */}
        <div style={{ position: 'absolute', top: '30px', right: '30px', transform: 'translateY(-50%)' }}>
            <Link to='/login' style={{color: 'white'}}className="nav-link">Logout</Link>
        </div>

        {/* Text and Image Section */} 
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: '20px', alignItems: 'center' }}>
            <div style={{ flex: 1, marginRight: '20px' }}>
                <h1><strong>Groceries and more!</strong></h1>
                <p> To be delivered to your Barangays</p>
            </div>
            <div style={{ flex: 1, }}>
                <img src="./delivery.png" alt="Tricycle" style={{ width: '300px', height: '300px' }} />
            </div>
        </div>
        
    </div>
 )
}

export default Home;