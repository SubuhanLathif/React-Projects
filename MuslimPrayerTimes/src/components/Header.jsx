import SiteLogo from '../assets/SiteLogo.png'
export const Header = () => {
  return (
    < div className="px-lg-5 px-md-4 px-3">
    <div className="header d-flex container py-2 px-0 justify-content-between align-items-center">
        <div className="logo"><img src={SiteLogo} alt="site-logo"/></div>
        <div className="header-btn"><button className='btn btn-sm px-4 py-2 rounded-pill'>Contact</button></div>
    </div>
    </div>
  )
}
