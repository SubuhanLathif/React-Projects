import  { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
// Import necessary libraries
// import * as XLSX from 'xlsx';  // For Excel export
// import jsPDF from 'jspdf';  // For PDF export
// import 'jspdf-autotable';  // For formatting tables in the PDF
// import { Button } from '@mui/material';

export const UserTable = () => {
  const [users, setUsers] = useState([]);

  // Fetch data from your backend API
  useEffect(() => {
    axios.get('http://localhost:5000/api/users')
      .then(response => setUsers(response.data))  // Store the fetched data
      .catch(error => console.error(error));
  }, []);

  // Define columns for the DataGrid
  const columns = [
    { field: 'name', headerName: 'Name', width: 150 },  // You can add more fields based on your data
    // Add other columns if necessary based on the data structure
  ];

  // Function to export data as Excel (.xlsx) file
  const downloadExcel = () => {
    // Convert users data to sheet format
    const worksheet = XLSX.utils.json_to_sheet(users);  // JSON data to worksheet
    const workbook = XLSX.utils.book_new();  // Create a new workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Users');  // Add the worksheet to the workbook
    // Download the Excel file with name 'users.xlsx'
    XLSX.writeFile(workbook, 'users.xlsx');
  };

  // Function to export data as PDF file
  const downloadPDF = () => {
    const doc = new jsPDF();  // Initialize a new jsPDF instance
    const tableColumn = ["Name"];  // Column names (you can add more if necessary)
    const tableRows = [];

    // Loop through each user and create a row for the PDF
    users.forEach(user => {
      const userData = [user.name];  // Each user row (you can add more fields if necessary)
      tableRows.push(userData);  // Push the row to tableRows array
    });

    // Add the table to the PDF
    doc.autoTable(tableColumn, tableRows, { startY: 20 });
    doc.text("Users List", 14, 15);  // Add title to the PDF
    // Save the generated PDF file with the name 'users.pdf'
    doc.save('users.pdf');
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
 

      {/* DataGrid to display fetched data */}
      <DataGrid
        rows={users}  // Provide fetched users data to DataGrid
        columns={columns}  // Provide column structure
        pageSize={5}  // Set initial page size
        rowsPerPageOptions={[5, 10, 20]}  // Options for page size
        checkboxSelection  // Enable row selection with checkboxes
        disableSelectionOnClick  // Prevent selection on clicking a row
        sortingOrder={['asc', 'desc']}  // Enable sorting by columns
      />
    </div>
  );
};
