import {Task} from './Task.js';


export function TaskList({todos, isActive}) {
    const listItems = todos.map((obj) => <Task task={obj.task} key={obj.id} id={obj.id} completed={obj.completed} isEdited={obj.isEdited} isActive={isActive} date={obj.date}/>)
    return (
<ul className="todo-list">
    
    {listItems}

</ul>
    )
}