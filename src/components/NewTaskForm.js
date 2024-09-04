import { useState } from 'react'

export function NewTaskForm({addTodo}) {
    const [value, setValue] = useState("")
    const handleSubmit = () => {
        addTodo(value)
        setValue("")
    }
    return (
        <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            onChange={(event) => setValue(event.target.value)}
            value={value}
            onKeyDown={(e) => {if (e.key === "Enter") handleSubmit()}}
        >
        </input>
    )
}