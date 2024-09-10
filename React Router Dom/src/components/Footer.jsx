export const Footer = () => {
const currentYear = new Date().getFullYear();
return (
<footer className="p-3 container-fluid bg-transparent fixed-bottom">
<div className="d-flex flex-wrap justify-content-between align-items-center p-0">
<div className="col-md-4 d-flex align-items-center">
<span className="text-light copyrights invisible" style={{fontSize:"0.8rem"}}>© {currentYear} <a href="https://subuhanbca.netlify.app" target="_blank" className="text-light">Subuhan BCA</a></span>
</div>
<ul className="nav col-md-4 justify-content-end list-unstyled d-flex" style={{fontSize:"0.8rem"}}>
<li className="ms-3">
<a className="text-light" href="https://github.com/SubuhanLathif/" target="_blank">Github</a>
</li>
<li className="ms-3">
<a className="text-light" href="https://subuhanbca.netlify.app" target="_blank">Website</a>
</li>
</ul>
</div>
</footer>
)
}
