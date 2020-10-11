import React from 'react'
import { Link } from 'react-router-dom';
import SignedInLinks from './signedInlinks';
import SignedOutLinks from './signedOutlinks';
import logo from '../assets/logo1.png';
const Navbar = () => {
  return (
    <div className="navbar-fixed">
    <nav className="nav-wrapper white black-text">
      <div className="container black-text">
        <Link to='/' className="brand-logo">
          <img src={logo} width="300" height="auto" alt="logo"/>
        </Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  </div> 
  )
}

export default Navbar