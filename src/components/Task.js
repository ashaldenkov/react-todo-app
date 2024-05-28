import { useContext, useEffect, useState, useRef } from "react";
import {Context} from './context'
import {EditTask} from './EditTask.js';
import { formatDistanceToNow } from "https://unpkg.com/date-fns/formatDistanceToNow.mjs";
import PropTypes from 'prop-types';

function Task({isActive, ...task}) {
  const [createTime, setCreateTime] = useState()

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
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCreateTime(formatDistanceToNow(
        task.date,
        {includeSeconds: true}
      ));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [task.date]);

  const inputRef = useRef()

  useEffect(() => {
    if (task.isEdited) {
      inputRef.current.focus();
    }
  }, [task.isEdited]);

    return (
      <li className={classComb(classStatus(), filterStatus(isActive))}>
        <div className="view">
          <input className="toggle" type="checkbox" onChange={() => completeTodo(task.id)}/>
          <label>
            <span className="description">{task.task}</span>
            <span className="created">Created {createTime || `0 seconds`} ago</span>
          </label>
          <button className="icon icon-edit" onClick={() => editTodo(task.id)}/>
          <button className="icon icon-destroy" onClick={() => deleteTodo(task.id)} />
        </div>
        <EditTask refs={inputRef} task={task}/>
      </li>
    )
}

Task.defaultProps  = {
  isActive: "first",
  completed: false,
  isEdited: false
}

Task.propTypes = {
  isActive: PropTypes.string,
  completed: PropTypes.bool,
  isEdited: PropTypes.bool,
  task: PropTypes.string
}

export {Task}