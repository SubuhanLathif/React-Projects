export const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="pb-1 container-fluid bg-dark fixed-bottom">
        <div className="d-flex flex-wrap justify-content-between align-items-center container p-0">
        <div className="col-md-4 d-flex align-items-center">
        <span className="text-light" style={{fontSize:"0.8rem"}}>© {currentYear} <a href="https://subuhanbca.netlify.app" target="_blank" className="text-light">Subuhan BCA</a></span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3">
        <a className="text-light" href="https://github.com/SubuhanLathif/" target="_blank"><i className="bi bi-github fs-5"></i></a>
        </li>
        <li className="ms-3">
        <a className="text-light" href="https://subuhanbca.netlify.app" target="_blank"> <i className="bi bi-globe2 fs-5"></i></a>
        </li>
        </ul>
        </div>
  </footer>
  )
}
