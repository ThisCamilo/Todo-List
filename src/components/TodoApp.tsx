import { useState } from "react"
import { ListTask } from "./ListTask";

export const TodoApp = () => {

    const [task, setTask] = useState<string>('');
    const [list, setList] = useState<string[]>([]);

    const handleTask = () => {
        if(task.trim() === '') return
        setList(taskAnt => [...taskAnt, task])
        setTask('')
    }
    const handleDeleteTask = (index: number) => {
        setList(task => task.filter((_ , e) => e !== index))
    }

return(
    <div className="taskContainer">
        <h1>Todo List</h1>
        <div className="flex">
            <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="New Task"
            />
            <button onClick={handleTask}>Add Task</button>
        </div>
        <ListTask list={list} deleteTask={handleDeleteTask}></ListTask>
    </div>
)
}