import React from 'react';
import { Link } from 'react-router-dom';

export const Header = ({cart}) => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-dark container-fluid">
        <div className="container">
        <a className="navbar-brand text-light d-flex align-items-center" href="#"><img src="src/assets/ProductImages/Site-Logo.svg" alt="sitelogo" className="site-logo w-25" /><span  style={{fontFamily: "cursive"}} className='fs-2 fw-bold ms-2'>Java Cafe</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
        <Link className="nav-link active text-light" aria-current="page" to={"/"}>Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link text-light position-relative" aria-current="page" to={"/ViewCart"}>View Cart <span className="position-absolute  start-100 translate-middle badge rounded-5 bg-success">
         {cart.length}
        </span></Link>
        </li>
        </ul>
        </div>
        </div>
        </nav>
    </>
  )
}
