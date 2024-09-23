import React from 'react'
import './style.css'
import { UseLocalStorage } from './UseLocalStorage'
export const LightDarkTheme1 = () => {
    const [theme,setTheme] = UseLocalStorage('theme','dark') // by default i use dark theme

    function handleToggleTheme () {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    console.log(theme);
    
  return (
    <section className="vh-100 p-lg-5 p-md-4 p-3 d-flex align-items-center justify-content-center" data-theme={theme}>
    <div className='card rounded-2'>
    <div className="card-header d-flex justify-content-between border-0">
        <div className="logo"><img src='../../src/assets/s-logo2.svg' alt="Logo-Icon" width={20} /></div>
        <div className="toggle-btn">
            <label className="switch">
            <input type="checkbox" onChange={handleToggleTheme} checked={theme === 'light'}/>
            <span className="slider"></span>
            </label>
        </div>
    </div>
    <div className="card-body text-center">
    <div className="profile m-auto">
        <img src="../../src/assets/profile.svg" alt="Profile-Img" className='p-1 rounded-circle'/>
    </div>
    <h6 className='text-uppercase fs-6 mt-3 mb-1'>Subuhan Lathif</h6>
    <small className='text-uppercase'>Web developer</small>
    <p className='mb-0 mt-3'>Passionate web developer with 2 years of experience in creating dynamic and user-friendly websites. As a freelancer, I thrive on collaboration to bring your vision to life. Let’s connect!</p>
    <hr/>
    <div className="social-icons d-flex gap-3 flex-nowrap justify-content-center">
    <a target="_blank"><i className="bi bi-github fs-5"></i></a>
    <a target="_blank"><i className="bi bi-linkedin fs-5"></i></a>
    <a href="https://subuhanbca.netlify.app/" target="_blank"><i className="bi bi-globe fs-5"></i></a>
    </div>
    </div>
    </div>
    </section>
  )
}
