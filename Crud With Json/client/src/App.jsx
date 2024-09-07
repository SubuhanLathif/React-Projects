import { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import { Footer } from './components/Footer';

function App() {
  const [users,setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterusers,setFilterusers] = useState([]);
  const [userData,setUserData] = useState({name:"",age:"",city:""});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchAllUsers = async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      const response = await axios.get('http://localhost:8000/users');
      console.log(response.data);
      setUsers(response.data);
      setFilterusers(response.data);
    } catch (error) {
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  //initialy fetch all user records
  useEffect(() => {
  fetchAllUsers();
  },[])

  // search user records method
  const handleSearchRecords = (e) => {
  const searchText = e.target.value.toLowerCase();
  const filtereduser = users.filter((user) => user.name.toLowerCase().includes(searchText) || user.city.toLowerCase().includes(searchText));
  setFilterusers (filtereduser);
  }

  //delete user method
  const handleDelete = async (id) => {
  const isConfirmed = window.confirm("Are you sure want to delete this user ?");
  if(isConfirmed){ 
  await axios.delete(`http://localhost:8000/users/${id}`).then((res) => {
  setUsers(res.data);
  setFilterusers(res.data);
  })
  }
  }

  //add new user method
  const handleAddNewRecords = () => {
  setUserData({name:"",age:"",city:""});
  handleShow();
  }

  const handleData = (e) => {
  setUserData ({...userData,[e.target.name]: e.target.value})
  }

  //handle form submit 
  const handleSubmit = async (e) => {
    e.preventDefault();

    //update existing records 
    if(userData.id){
    await axios.patch(`http://localhost:8000/users/${userData.id}`,userData).then((res) => {
    console.log(res);
    toast.success(res.data.msg, {
      className: 'toast-success',
      progressClassName: 'Toastify__progress-bar--success'
    });
    })
    }
    
    //add new records
    else {
    await axios.post("http://localhost:8000/users",userData).then((res) => {
    console.log(res);
    toast.success(res.data.msg, {
      className: 'toast-success',
      progressClassName: 'Toastify__progress-bar--success'
    });
    })
    }
    fetchAllUsers();
    handleClose();
    setUserData({name:"",age:"",city:""});
  }

  //update existing user records
  const handleUpdateRecords = (user) => {
  setUserData(user);
  handleShow();
  }

  //show error failed to fetdh data
  if (error) {
  return <div>{error}</div>;
  }

  return (
    <>
    <ToastContainer/>
    <section className='p-lg-5 p-md-4 p-2'>
      <div className="container p-0">
      <div className="content-box w-100">
       <h4 className='px-2 py-1'>Crud Operation</h4> 
       <p className='text-white project-desc'>This project is a simple CRUD (Create, Read, Update, Delete) application that demonstrates the use of React for the frontend and Express.js for the backend. The data is managed using a JSON file, which acts as a lightweight data store.</p>
       <div className="d-flex justify-content-between border p-1">
        <div>
          <input type="search" className='form-control rounded-0 border' placeholder='Search Records...' onChange={handleSearchRecords}/>
        </div>
        <div>
          <button className="btn rounded-0 bg-success text-white border-1 border-success h-100" onClick={handleAddNewRecords}>
        Add Record
      </button>
        </div>
       </div>

        <div className='border p-1 mt-3'>
        <table className="table mb-0 users-table  border">
        <thead>
        <tr>
        <th scope="col">S.No</th>
        <th scope="col">Name</th>
        <th scope="col">Age</th>
        <th scope="col">City</th>
        <th scope="col" className='text-end'>Action</th>
        </tr>
        </thead>
          <tbody>
          { loading ? (
            <tr>
              <td colSpan="5" className='text-center py-3'>
                <div className="spinner-border spinner-border-sm me-2" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
                <span>Loading...</span>
              </td>
            </tr>
          ) :
          filterusers.length === 0 ? (
          <tr>
          <td colSpan="5" className='text-center py-3'>No Records Found</td>
          </tr>
          ) : (
            filterusers.map((user, index) => (
          <tr key={user.id}>
          <td>{index + 1}</td>
          <td>{user.name}</td>
          <td>{user.age}</td>
          <td>{user.city}</td>
          <td className='d-flex gap-2 justify-content-end'>
            <button className='btn btn-sm rounded-0 btn-primary' title='Edit' onClick={() => handleUpdateRecords(user)}>
              <i className="bi bi-pencil-square fs-6"></i>
            </button>
            <button className='btn btn-sm rounded-0 btn-danger' title='Delete' onClick={() => handleDelete(user.id)}>
              <i className="bi bi-trash3-fill fs-6"></i>
            </button>
          </td>
          </tr>
          ))
          )}

          </tbody>
        </table>
        </div>
        </div> 
      </div>
      </section>

      {show && (
        <div className="modal fade show" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: 'block' }}>
          <div className="modal-dialog w-50" role="document">
            <div className="modal-content border-0 rounded-0 p-4 pt-0">
              <div className="modal-header p-0 d-flex justify-content-between">
              <h5 className="modal-title" id="exampleModalLabel">{userData.id ? "Update Records" : "Add New Record"}</h5>
                <button type="button" className="close btn border-0 bg-transparent pe-0" onClick={handleClose} aria-label="Close">
                  <span aria-hidden="true"><i className="bi bi-x fs-2"></i></span>
                </button>
              </div>
                <form onSubmit={handleSubmit}>
                <div className="modal-body p-0 pt-3">
                <div>
                <input type="text" name='name' value={userData.name} placeholder='Enter Name' className='form-control rounded-0 border' required onChange={handleData} />
                </div>
                <div className='my-3'>
                <input type="number" name='age' value={userData.age}  placeholder='Enter Age' className='form-control rounded-0 border' required onChange={handleData} />
                </div>
                <div className='mt-3 mb-2'>
                <input type="text" name='city' value={userData.city}  placeholder='Enter City' className='form-control rounded-0 border' required onChange={handleData} />
                </div>
                </div>
                <div className="modal-footer row flex-wrap border-0 pb-0 gap-3">
                <button className="col btn rounded-0 bg-secondary text-white border-1 border-secondary m-0" onClick={handleClose}>Cancel</button>
                <button className="col btn rounded-0 bg-primary text-white border-1 border-primary m-0" type='submit'>{userData.id ? "Update" : "Add"}</button>
                </div>
                </form>
            </div>
          </div>
        </div>
      )}
      <Footer/>
    </>
  )
}

export default App
