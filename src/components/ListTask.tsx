import { Task } from "./Task"

type Props = {
    list: string[],
    deleteTask: (index: number) => void
}

export const ListTask = ({list, deleteTask}: Props) => {
    return(
        <div className="taskList">
            {list.map((task, index) => 
            <Task key={index} task={task} deleteTask={()=> deleteTask(index)}></Task>
            )}
        </div>
    )
}