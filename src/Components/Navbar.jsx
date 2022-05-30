import React from 'react'
import logo from '../Images/IMG-20211004-WA0044.jpg'
import { Link } from 'react-router-dom'

import '../CSS_File/Nav.css'

function Navbar() {
    return (
        <div className='font-serif'>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <div className='justify-center ml-0 2xl:ml-56 md:ml-0 mr-0 2xl:mr-14'>
                        <div className="group flex items-center">
                            <Link className="navbar-brand flex" to="/" style={{ fontFamily: 'Sofia' }}>
                                <img className="shrink-0 h-12 w-12 rounded-full mr-2" src={logo} alt="" />
                                <div className="ltr:ml-3 rtl:mr-3 mt-2">
                                    Subham Bhattacharjee
                                </div>
                            </Link>
                        </div>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav mb-2 mb-lg-0 space-x-0 2xl:space-x-10">
                            <li className="nav-item">
                                <Link className="nav-link font-serif" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link font-serif" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link font-serif" to="/skills">Skills</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link font-serif" to="/project">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link font-serif" to="/gallery">Gallery</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link font-serif" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Navbar */}
        </div>
    )
}

export default Navbar