import TasksFilter from './TasksFilter.js';
import { useContext } from "react";
import { Context } from '../context/todoContext.js'

export function Footer(props) {
  const { clearCompleted } = useContext(Context)

  const itemsLeft = (list) => {
    if (list.length) {
      let result = list.filter(e => !e.completed)
      return result.length
    }
    return 0
  }

    return (
      <footer className="footer">
        <span className="todo-count">{itemsLeft(props.todos)} items left</span>
        <TasksFilter isActive={props.isActive} setActive={props.setActive}/>
        <button className="clear-completed" 
        onClick={() => clearCompleted()}>
          Clear completed
        </button>
      </footer>
    )
}