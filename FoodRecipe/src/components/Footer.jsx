export const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="py-3 container-fluid bg-dark">
        <div className="d-flex flex-wrap justify-content-between align-items-center container p-0">
        <div className="col-md-4 d-flex align-items-center">
        <span className="text-grey" style={{fontSize:"0.8rem"}}>© {currentYear} <a href="https://subuhanbca.netlify.app" target="_blank">Subuhan BCA</a></span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3">
        <a className="text-grey" href="https://github.com/SubuhanLathif/" target="_blank"><i class="bi bi-github fs-5"></i></a>
        </li>
        <li className="ms-3">
        <a className="text-grey" href="https://subuhanbca.netlify.app" target="_blank"> <i class="bi bi-globe2 fs-5"></i></a>
        </li>

        </ul>
        </div>
  </footer>
  )
}
