import { AuthProvider } from "../context/AuthContext"
import { Register } from "./Register"
import { BrowserRouter,Routes,Route  } from "react-router-dom"
import {Dashboard} from "./Dashboard"
import {Login} from "./Login"
import { ForgetPassword } from "./ForgetPassword"
import { UpdateProfile } from "./UpdateProfile"
import {PrivateRoutes} from "./PrivateRoutes"
import {ReactLogo} from "../src/assets/react-logo.svg"
import {FirebaseLogo} from "../src/assets/firebase.svg"


function App() {
const currentYear = new Date().getFullYear();
return (
  <section className="p-lg-5 p-md-4 p-3 vh-100 d-flex align-items-center">
    <img src={ReactLogo} alt="ReactLogo" width={60} className="position-absolute react-img"/>
    <img src={FirebaseLogo} alt="ReactLogo" width={60} className="position-absolute firebase-img"/>
  <AuthProvider>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Dashboard />}></Route>
    <Route path="/register" element={<Register />}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/forget-password" element={<ForgetPassword />}></Route>
    {/*use private routes for update-profile component it can be access only by logged-in user*/}
    <Route path="/update-profile" element={<PrivateRoutes><UpdateProfile /></PrivateRoutes>} />
  </Routes>
  </BrowserRouter>  
  </AuthProvider>
  <span className="text-black position-absolute" style={{fontSize:"0.8rem",bottom:'15px'}}>© {currentYear} <a href="https://subuhanbca.netlify.app" target="_blank" className="text-grey">Subuhan BCA</a></span>
  </section>
)
}

export default App
