import { useState } from 'react';
import {Navbar} from './components/Navbar.jsx';
import {Footer} from './components/Footer.jsx';
import {Home} from './pages/Home.jsx';
import {Favourite} from './pages/Favourite.jsx';
import {Details} from './pages/Details.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <main>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/favourites" element={<Favourite/>} />
        <Route path="/details/:id" element={<Details/>} />
      </Routes>
    </main>
    <Footer/>
    </BrowserRouter>

    </>
  )
}

export default App
