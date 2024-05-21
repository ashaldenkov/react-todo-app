import {Task} from './Task.js';


export function TaskList(todos) {
    const listItems = Object.values(todos)[0].map((obj) => <Task task={obj.task} key={obj.id} id={obj.id} completed={obj.completed} isEdited={obj.isEdited}/>)
    return (
<ul className="todo-list">
    {/* <li className="editing">
        <Task />
        <input type="text" className="edit" defaultValue="Editing task" />
    </li> */}
    

    {listItems}

</ul>
    )
}