import { BrowserRouter,Routes,Route } from "react-router-dom"
import {Home} from './pages/Home';
import {About} from './pages/About';
import {Services} from './pages/Services';
import {Contact} from './pages/Contact';
import { MyNavbar } from "./components/MyNavbar";
import { Footer } from "./components/Footer";
function App() {
const currentYear = new Date().getFullYear();

  return (
  <>
  <BrowserRouter>
  <MyNavbar />
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/services" element={<Services />} />
  <Route path="/contact" element={<Contact />} />
  </Routes>
  <Footer/>
  </BrowserRouter>
  <span className="text-light copyrights position-fixed">© {currentYear}  <a href="https://subuhanbca.netlify.app" target="_blank" className="text-light"> &nbsp;Subuhan BCA</a></span>
  </>
  )
}
export default App
