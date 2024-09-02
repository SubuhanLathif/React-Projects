import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

export const ExpenseView = ({ type, data }) => {
  // Function to format timestamp to a Date object
  const formatDate = (timestamp) => new Date(timestamp);

  return (
    <TableContainer component={Paper} sx={{ marginTop: 2, borderRadius: 5 }}>
      <Typography variant="h6" gutterBottom sx={{ paddingLeft: 2,paddingTop:2}}>
        {type.charAt(0).toUpperCase() + type.slice(1)} Transactions
      </Typography>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>S.No</TableCell>
            <TableCell>Description</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length > 0 ? (
            data.map((item, index) => {
              const date = formatDate(item.id);
              const dateStr = date.toLocaleDateString();
              const timeStr = date.toLocaleTimeString();

              return (
                <TableRow key={item.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell align="right">{item.amount}</TableCell>
                  <TableCell align="right">{dateStr}</TableCell>
                  <TableCell align="right">{timeStr}</TableCell>
                </TableRow>
              );
            })
          ) : (
            <TableRow>
              <TableCell colSpan={5} align="center">No Transactions Found</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
