
import { useEffect, useRef, useState } from "react"
import { ToDoItems } from "./ToDoItems"
export const ToDo = () => {
  const [todoList,SetTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);

  //updated localstorage
  useEffect(() => {
  localStorage.setItem("todos",JSON.stringify(todoList));
  },[todoList]);
  
  const inputRef  = useRef(null);

  //add task method
  const addTask = (e) => {
  e.preventDefault();
  const inputValue = inputRef.current.value.trim();
  const newTodo = {
  id : Date.now(),
  task : inputValue,
  isComplete : false,
  };
  SetTodoList((prev) => [...prev,newTodo]);
  inputRef.current.value = '';
  }

  //update task method
  const updateTask = (id) => {
    SetTodoList((prev) => {
      return prev.map((todo)=>{
        if(id === todo.id){
          return {...todo,isComplete: !todo.isComplete};
        }
        return todo;
      })
    })
  }

  //delete task method
  const deleteTask = (id) => {
    SetTodoList((prev) => {
      return prev.filter((todo) => todo.id !== id);
    })
  }

  return (
    <>
        <form onSubmit={addTask}>
        <div className="row gx-1 flex-wrap">
            <div className="col-9">
            <input type="text" ref ={inputRef} className="form-control rounded-0" placeholder="Enter Task Details" required/>
            </div>
            <div className="col-3">
            <input type="submit" value="Add Task" className="submit-btn form-control rounded-0"/>
            </div>
        </div>
        </form>
        <div className="task-lists h-100 mt-4">
        {todoList.length === 0 ? (
        <div className="d-flex flex-column h-100 w-100 align-items-center justify-content-center" style={{marginTop:"-35px"}}>
        <img src="/src/assets/nodata-found.svg" alt="No Records Found" width={200}/>
        <p className="mb-0 mt-4">No Task Found...</p>
        </div>  
        ) : (
          <>
        <div className="d-flex align-items-center gap-3 ">
        <i className="bi bi-journal-check fs-3 text-yellow"></i><h6 className="fw-normal mb-0">Your Tasks List</h6>
        </div>
        <ToDoItems tasks={todoList} updateTask={updateTask} deleteTask={deleteTask}/>
        </>
        )
      }  
        </div>
    </>
  )
}
