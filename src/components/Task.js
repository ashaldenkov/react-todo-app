import { useContext } from "react";
import {Context} from './context'
import {EditTask} from './EditTask.js';

export function Task({isActive, ...task}) {
  const {completeTodo, deleteTodo, editTodo} = useContext(Context)
  const classStatus = () => {
    if (task.completed) {
      return 'completed';
  } if (task.isEdited) {
      return 'editing';
  } if (task.deleted) {
    return 'hidden';
}
  return null;
  }

  const filterStatus = (stat) => {
  if (stat === 'second') {
    if (task.completed) {
      return 'hidden';
    }
    return null
  } if (stat === 'third') {
    if (!task.completed) {
      return 'hidden';
    }
    return null
}
  return null;
  }

  const classComb = (act, hid) => {
    if (act && hid) {
      return `${act} ${hid}`
    }
    if (act) {
      return act
    }
    if (hid) {
      return hid
    }
  }
  

    return (
      <li className={classComb(classStatus(), filterStatus(isActive))}>
        <div className="view">
          <input className="toggle" type="checkbox" onChange={() => completeTodo(task.id)}/>
          <label>
            <span className="description">{task.task}</span>
            <span className="created">created 17 seconds ago</span>
          </label>
          <button className="icon icon-edit" onClick={() => editTodo(task.id)}/>
          <button className="icon icon-destroy" onClick={() => deleteTodo(task.id)} />
        </div>
        <EditTask task={task}/>

      </li>
    )
}