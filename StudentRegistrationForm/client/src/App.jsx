// import { RegisterForm } from "./components/RegisterForm"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import { RegisterForm } from "./components/RegisterForm"
import { RegisterUsersList } from "./components/RegisterUsersList"

function App() {

  return (
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<RegisterForm />} />
    <Route path="/all-users" element={<RegisterUsersList />} />
    </Routes>
 </BrowserRouter>
  )
}

export default App
