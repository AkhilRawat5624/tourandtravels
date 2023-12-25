import React from 'react';
import { Link } from 'react-router-dom';



const NavBar = () => {
  return (
  
    <nav className="navbar navbar-expand-lg ">
      <div className="container">
      <Link className="navbar-brand mx-5 col-md-1 " to="/"><img src="images/logo.jpg" style={{ borderRadius: '50%', width: '50px', height: '40px' }} alt="logo" /></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
      <div className=" collapse navbar-collapse col-md-6  navbar-nav justify-content-center "id="navbarNav">
        <ul className="navbar-nav ">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/About">About</Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
          
        </ul>

      </div>
      <div className="col-md-4  ">
        <ul className='collapse navbar-collapse navbar-nav ml-auto justify-content-end ' id='navbarNav'>
          <li className="nav-item">
            <Link className="nav-link" to="/Login">Login &nbsp;||</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Register">Signup</Link>
          </li>
         
        </ul>
      </div>
      </div>
    </nav>
   
  );
};

export default NavBar;
