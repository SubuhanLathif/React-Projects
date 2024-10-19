import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MUIDataTable from "mui-datatables";
import img1 from '../assets/got-logo.png';

// Define the columns including both 'name' and 'email'
const columns = [
    { field: 'id', headerName: 'S.No', width: 100, sortable: false }, // Serial Number
    { field: 'name', headerName: 'Name', width: 200 }, // Name column
    { field: 'email', headerName: 'Email', width: 250 }, // Email column
  ];

export const MuiDateTable = () => {
    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(true);

    // Fetch users from the backend
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users/');
        const data = response.data.map((user, index) => ({
          sNo: index + 1,  // Serial number
          name: user.name,  // User's name
          email: user.email, // User's email
        }));
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000);
      fetchUsers();
      return () => clearTimeout(timer);
    },[]);

    const columns = [
      {
        name: "sNo",
        label: "S.No",
        options: {
          filter: false,
          sort: true,
        }
      },
      {
        name: "name",
        label: "Name",
        options: {
          filter: true,
          sort: true,
        }
      },
      {
        name: "email",
        label: "Email",
        options: {
          filter: true,
          sort: true,
        }
      }
    ];
  
    // Options for the MUI-Datatables
    const options = {
      filterType: 'checkbox',  // Type of filter to use
      download: true,          // Enable download button
      print: true,            // Enable print button
      rowsPerPage: 10,          // Set default rows per page
      rowsPerPageOptions: [10, 20, 30],  // Rows per page options
      responsive: 'standard',  // Responsiveness mode
      selectableRows: 'multiple',  // Disable row selection checkboxes
      search: true,            // Enable search feature
      sort: true,              // Enable sorting
    };
  

  if(loading) {
    return (
    <div className='loading-text'>
    <img src={img1} alt="got-logo" width={200}/>
    <p>Fetching  all characters.....</p>
    </div>
    )
  }
  return (
   <>
      <section className="main-section">
      <MUIDataTable
      title={"Game of Thrones Characters"}
      data={users}    // Pass users data here
      columns={columns}  // Pass columns definition
      options={options}  // Pass table options
      />
      </section>
    </>
  );
}
