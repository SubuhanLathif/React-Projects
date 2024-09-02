import { useState } from 'react'
import { AddTransaction } from "../add-transaction/AddTransaction"
import { Chart } from '../chart/Chart'
export const Summary = ({totalExpense,totalIncome}) => {
const hasTransactions = totalExpense > 0 || totalIncome > 0;
 const containerClass = `bg-light-blue p-lg-5 p-md-4 p-sm-4 p-3 rounded-5 h-100 ${
    !hasTransactions ? 'd-flex justify-content-center align-items-center' : ''
  }`;
  return (
    <>
    <div className='row row-cols-lg-2 row-cols-md-1 row-cols-sm-1 row-cols-1 g-3 mt-5'>
        <div className="col d-flex flex-column">
            <div className="bg-light-blue p-lg-5 p-md-4 p-sm-4 p-3 rounded-5 h-100 d-flex flex-column justify-content-center">
                <div className='d-flex justify-content-between mb-5'>
                <h3 className='mb-0'>Balance Amount</h3>
                <h3 className='mb-0'><mark style={{backgroundColor:"#4e73df",color:"#fff"}}>
                ₹ {totalIncome - totalExpense}</mark></h3>
                </div>
                <div className='d-flex justify-content-between mb-5'>
                <h3 className='mb-0'>Total Income</h3>
                <h3 className='mb-0'><mark style={{backgroundColor:"#1cc88a",color:"#fff"}}>
                ₹ {totalIncome}</mark></h3>
                </div>
                <div className='d-flex justify-content-between'>
                <h3 className='mb-0'>Total Expense</h3>
                <h3 className='mb-0'><mark style={{backgroundColor:"#bb2d3b",color:"#fff"}}>₹ {totalExpense}</mark></h3>
                </div>
            </div>
        </div>
        <div className="col d-flex flex-column">
            <div className={containerClass}> 
            {hasTransactions ? (
            <Chart
            expense={totalExpense}
            income={totalIncome}
            balance={totalIncome - totalExpense}
            />
            ) : (
            <div className="text-center text-gray-500">No Transactions Found</div>
            )}
            </div>
        </div>
    </div>
    <div>
        <AddTransaction/>
    </div>
    </>
  )
}
