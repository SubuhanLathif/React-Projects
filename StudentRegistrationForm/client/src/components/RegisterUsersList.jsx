import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const RegisterUsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [maleCount, setMaleCount] = useState(0);
  const [femaleCount, setFemaleCount] = useState(0);
  const [othersGen, setothersGen] = useState(0);

  // Function to fetch users from the backend
  const fetchUsers = async () => {
    try {
      // const response = await fetch('http://localhost:5000/api/users/all-users'); // Ensure this matches your backend URL
      const response = await axios.get('http://localhost:5000/api/users/all-users'); //using axios get method
      const data = response.data;
      setUsers(data); // Set the users in state

      const maleUsers = data.filter(user => user.gender === 'male');
      const femaleUsers = data.filter(user => user.gender === 'female');
      const otherUsers = data.filter(user => user.gender === 'others');
      setMaleCount(maleUsers.length);
      setFemaleCount(femaleUsers.length);
      setothersGen(otherUsers.length);

      setLoading(false);
      console.log(data);
      
    } catch (error) {
      console.error('Error fetching users:', error);
      setLoading(false);
    }
  };

  // useEffect to fetch users when the component is mounted
  useEffect(() => {
    fetchUsers();
  }, []);


   // Helper function to format date (DD-MM-YYYY)
   const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`; // Format as DD-MM-YYYY
  };
 

  if (loading) {
    return <p className='fs-5 d-flex vh-100 align-items-center justify-content-center'>Fetchind users...</p>;
  }

  return (
    <section className="p-lg-5 p-md-4 p-3">
      <div className='d-flex justify-content-between align-items-center mb-3'>
      <div><h4 className='mb-0'>Registered Users List</h4></div>
      <div>
        <div className="counts bg-dark text-white  d-flex gap-2 border border-dark">
        <p className='mb-0 py-2 px-3 '>Total No of Users : {users.length}</p>
        <Link to="/" className='py-2 px-3 bg-white text-black text-decoration-none'>Back</Link>
        {/* <div className='d-flex gender-count justify-content-end'>
        <p className='mb-0'>M - {maleCount} &nbsp;<span className='text-muted'>|</span> &nbsp;&nbsp; </p>
        <p className='mb-0'>F - {femaleCount} &nbsp;<span className='text-muted'>|</span> &nbsp;&nbsp; </p>
        <p className='mb-0'>O - {othersGen}</p>
        </div> */}
        </div>
        </div>
      </div>
      <table border="1" className='table table-striped mb-0 w-100'>
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Full Name</th>
            <th scope="col">Email Address</th>
            <th scope="col">Phone No</th>
            <th scope="col">DOB</th>
            <th scope="col">Gender</th>
            <th scope="col">Address</th>
            <th scope="col">Created At</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user,index) => (
              <tr key={user._id}>
                <td scope="row">{++index}</td>
                <td>{user.fullName}</td>
                <td>{user.emailAddress}</td>
                <td>{user.phoneNo}</td>
                <td>{formatDate(user.dob)}</td>
                <td className='text-capitalize'>{user.gender}</td>
                <td>{user.address}</td>
                <td>{user.updatedAt}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className='text-center'>No users found...</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
}






