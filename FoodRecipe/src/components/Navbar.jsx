import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import SiteLogo from '../assets/sitelogo.svg';

export const Navbar = () => {

  const {searchParam,setSearchParam,handleSubmit} = useContext(GlobalContext);
  // console.log(searchParam);
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-dark container-fluid sticky-top">
        <div className="container p-0">
        <Link className="nav-link text-light d-flex align-items-center" aria-current="page" to={"/"}>
          <img src={SiteLogo} alt="sitelogo" className="site-logo"/>
          <span  style={{fontFamily: "cursive"}} className='fs-2 fw-bold ms-1'>Recipe<span style={{color:"#FFAE3E"}}>e</span></span>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto">
        <li className="nav-item">
        <Link className="nav-link text-light" aria-current="page" to={"/"}>Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link text-light" aria-current="page" to={"/favourites"}>My Favourites</Link>
        </li>
        </ul>
        <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
        <input className="form-control mr-sm-2" type="search" placeholder="Search Recipe..." aria-label="Search" value={searchParam} onChange={(e)=>setSearchParam(e.target.value)} required/>
        </form>
        </div>
        </div>
        </nav>
    </>
  )
}
