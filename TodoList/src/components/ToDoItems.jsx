import React from 'react'

export const ToDoItems = ({ tasks,updateTask,deleteTask}) => {
  return (
        <div className="table-container">
        <table className="table my-2">
        <tbody>

        {tasks.map((todo, index) => (
            <tr className="vertical-align-middle" key={index}>
            <td>{index + 1}</td>
            <td className='taskInfo'onClick={() => updateTask(todo.id)}>{todo.task}</td>
            <td className="text-end d-flex align-items-center justify-content-end">
            {todo.isComplete ? 
            <p className="badge rounded-0 mb-0 me-2 fw-normal text-dark">Completed</p> : ""}
            <i className="bi bi-x fs-3 text-danger" onClick={() => deleteTask(todo.id)}></i>
            </td>
            </tr>
          ))}
        </tbody>
        </table>
    </div>
  )
}
