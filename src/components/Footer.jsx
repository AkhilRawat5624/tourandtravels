import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="footer" style={{background:'#f1f1f1'}}>
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <Link to="/" className="d-flex align-items-center">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYCW0GHdeuqRzO0iRwmguPzvG6uhIrqUf9Ew&usqp=CAU"
                                className="mr-3 img-fluid"
                                alt="Logo"
                                style={{width:'300px' , height :'160px',borderRadius:'50%'}}
                            />
                        </Link>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-4">
                                <h2 className="mb-4 text-sm font-weight-bold text-dark">Resources</h2>
                                <ul className="list-unstyled text-secondary">
                                    <li className="mb-2">
                                        <Link to="/" className="text-reset text-decoration-none">
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/about" className="text-reset text-decoration-none">
                                            About
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <h2 className="mb-4 text-sm font-weight-bold text-dark">Follow us</h2>
                                <ul className="list-unstyled text-secondary">
                                    <li className="mb-2">
                                    <Link to="/" className="text-reset text-decoration-none">
                                            Instagram
                                        </Link>
                                       
                                    </li>
                                    <li>
                                        <Link to="/" className="text-reset text-decoration-none">
                                            Twitter
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <h2 className="mb-4 text-sm font-weight-bold text-dark">Legal</h2>
                                <ul className="list-unstyled text-secondary">
                                    <li className="mb-2">
                                        <Link to="#" className="text-reset text-decoration-none">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#" className="text-reset text-decoration-none">
                                            Terms &amp; Conditions
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-4" />
                <div className="d-flex justify-content-between align-items-center">
                    <span className="text-secondary small">
                        © 2023
                        <a href="#" className="text-reset text-decoration-none">
                            Travel&Tour
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="d-flex ">
                        <Link to="#" className="text-secondary me-3 ">
                        <i class="fa-brands fa-facebook"></i>
                        </Link>
                        <Link to="#" className="text-secondary me-3 px-3">
                        <i class="fa-brands fa-discord"></i>
                        </Link>
                        <Link to="#" className="text-secondary me-3">
                        <i class="fa-brands fa-twitter"></i>
                        </Link>
                        <Link to="#" className="text-secondary me-3 px-4">
                        <i class="fa-brands fa-square-instagram"></i>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </footer>
    );
}

