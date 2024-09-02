import { Navbar } from "./components/navbar/Navbar"
import { Main } from "./components/main"
import { useState } from 'react'
import {Footer} from "./components/footer/Footer"

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => setIsModalOpen(true);
  const hideModal = () => setIsModalOpen(false);

  return (
    <>
     <Navbar showModal={showModal}/>
      <section className="p-lg-5 p-md-4 p-3">
        <div className="container p-0">
          <div>
            <Main  isOpen={isModalOpen} hideModal={hideModal} />
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default App
