import {useState} from 'react'
import {Context} from './context'
import { useContext } from "react";

export function EditTask({task}) {
    const {updateTask} = useContext(Context)
    const [value, setValue] = useState(task.task)
    const handleSubmit = () => {
        updateTask(value, task.id)
    }
    return (
        <input className="edit" placeholder="Rename Task" autoFocus onChange=
        {(event) => setValue(event.target.value)} value={value} onKeyDown=
        {(e) => {if (e.key === "Enter") handleSubmit()}}>
        </input>
    )
}