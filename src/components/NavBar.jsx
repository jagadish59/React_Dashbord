import React from 'react'
import { NavLink } from 'react-router-dom'



export default function NavBar() {
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 ">
                <div className="container">

                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                           
                          
                        </ul>
                        <div className="buttons">
                            <NavLink to="/login" className="btn btn-outline-dark">
                                <i className="fa fa-sign-in me-1"></i> Login</NavLink>
                                <NavLink to="/register" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-user-plus me-1"></i> Register</NavLink>
                                <NavLink to="/dashbord" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-shopping-cart me-1" ></i> Dashbord</NavLink>
                        </div>

                    </div>
                </div>
            </nav>

        </div>
    )
}