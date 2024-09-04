import { ToDo } from './components/ToDo';
import './index.css';


function App() {

  return (
    <section className="px-lg-5 px-md-4 px-2 bg-dark vh-100 w-100 d-flex align-items-center justify-content-center">
      <div className='big-heading position-absolute'>
      <h1 className='fw-bolder todo1 mb-0'>TODOOO<span>LISTS</span></h1>
      </div>
      <div className="col-lg-4 col-md-6 col-12 main-div bg-white p-4 position-relative">
      <ToDo/>
      </div>
    </section>
  )
}

export default App
