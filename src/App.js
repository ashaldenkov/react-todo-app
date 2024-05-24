import './App.css';
import {Footer} from './components/Footer.js';
import {TaskList} from './components/TaskList.js';
import {NewTaskForm} from './components/NewTaskForm.js';
import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Context } from './components/context.js';
uuidv4();


function App() {
  const [todos, setTodos] = useState([]);
  const [isActive, setActive] = useState("first");

  const addTodo = todo => {
    setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEdited: false}])
  }


  const completeTodo = (id) => {
    setTodos(Object.values(todos).map((todo) => {
      if (todo.id === id) {
        return{...todo, completed: !todo.completed}
      } else {
        return todo 
    }}
    ))
  }

  const deleteTodo = (id) => {
    setTodos(Object.values(todos).filter((todo) => {
      return (todo.id !== id) 
    }
    ))
  }

  const clearCompleted = () => {
    setTodos(Object.values(todos).filter((todo) => {
      return (!todo.completed) 
    }
    ))
  }

  const editTodo = (id) => {
    setTodos(Object.values(todos).map((todo) => {
      if (todo.id === id) {
        return{...todo, isEdited: !todo.isEdited}
      } else {
        return todo 
    }}
    ))
  }

  const updateTask = (task, id) => {
    setTodos(Object.values(todos).map((todo) => {
      if (todo.id === id) {
        return{...todo, task, isEdited: !todo.isEdited}
      } else {
        return todo 
    }}
    ))
  }



  return (
    <Context.Provider value = {{completeTodo, deleteTodo, editTodo, updateTask, clearCompleted}}>
    <section className="todoapp">
          <div className ="header">
            <h1>todos</h1>
            <NewTaskForm addTodo={addTodo}/>
          </div>
          <section className="main">
          <TaskList todos={todos} isActive={isActive}/>
          <Footer todos={todos} isActive={isActive} setActive={setActive}/>
          </section>
    </section>
    </Context.Provider>
  );
}

export default App;
