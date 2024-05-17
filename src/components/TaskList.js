import {Task} from './Task.js';


export function TaskList() {
    return (
<ul className="todo-list">
    <li className="completed">
        <Task />
    </li>
    <li className="editing">
        <Task />
        <input type="text" className="edit" defaultValue="Editing task" />
    </li>
    <li>
        <Task />
    </li>
</ul>
    )
}