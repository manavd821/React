import { Children, createContext, useContext, useState } from "react";

const TaskListContext = createContext({
    taskList : [{
        id : 1,
        text : 'todo msg',
        isEditing : false,
        isCompleted : false
    }],
    setTaskList : () => null
})

export const TaskListProvider = ({children}) => {
    const [taskList, setTaskList] = useState([])
    return (
        <TaskListContext.Provider value={{taskList, setTaskList}} >{children}</TaskListContext.Provider>
    )
}

export const useTaskList = () => useContext(TaskListContext)
