import { Summary } from "../summary/Summary"
import { ExpenseView } from "../expense-view/ExpenseView"
import { GlobalContext } from "../../context"
import { useContext, useEffect } from "react"

export const Main = () => {
  const {totalExpense,setTotalExpense,totalIncome,setTotalIncome,allTrasaction} = useContext(GlobalContext);
  useEffect(()=>{
    let income = 0;
    let expense = 0;
    allTrasaction.forEach(item => {
      item.type === 'income' ? income = income + parseFloat(item.amount) : expense = expense + parseFloat(item.amount)
    })
    setTotalExpense(expense)
    setTotalIncome(income)
  },[allTrasaction])
  return (
    <>
    <div>
     <Summary totalExpense={totalExpense} totalIncome={totalIncome}/>
    </div>
    <div className="row row-cols-lg-2 row-cols-md-1 row-cols-sm-1 row-cols-1 g-3 mt-2">
      <div className="col">
      <ExpenseView data={allTrasaction.filter(item=> item.type === 'income')} type={'income'} />
      </div>
      <div className="col">
      <ExpenseView data={allTrasaction.filter(item=> item.type === 'expense')} type={'expense'} />
      </div>
    </div>
    </>
  )
}
