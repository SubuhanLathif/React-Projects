import { useState,createContext } from 'react'
import { Header } from './components/Header.jsx';
import { Home } from './components/Home.jsx';
import { ViewCart } from './components/ViewCart.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

export  const cartContext = createContext();
function App() {
  const [cart,setCart] = useState([]);
  return (

    //this method use useContext Hook
    <cartContext.Provider value={{cart,setCart}}>
    <BrowserRouter>
    <Header cart={cart}/>
    <main>
    <section className="p-lg-5 p-sm-5 p-4">
      <div className="container p-0">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/ViewCart" element={<ViewCart/>} />
      </Routes>
      </div>
      </section>
    </main>
    </BrowserRouter>
    </cartContext.Provider>

    // ----------------------------------------------------------------- //

    // this method is common (props drilling method) - ignore this
    // <>
    // <BrowserRouter>
    // <Header cart={cart}/>
    // <main>
    // <section className="p-lg-5 p-sm-5 p-4">
    //   <div className="container p-0">
    //   <Routes>
    //     <Route path="/" element={<Home cart={cart} setCart={setCart}/>}/>
    //     <Route path="/ViewCart" element={<ViewCart cart={cart} setCart={setCart}/>} />
    //   </Routes>
    //   </div>
    //   </section>
    // </main>
    // </BrowserRouter>
    // </>

   
  )
}

export default App
