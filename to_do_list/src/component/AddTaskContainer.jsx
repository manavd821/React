import { v4 as uuidv4 } from 'uuid';
import { useState } from "react"
import { useTaskList } from "../context/TaskListContext";

export default function AddTaskContainer() {
    const [task, setTask] = useState("");
    const {taskList, setTaskList} = useTaskList()
    

    const resetField = () => {
        setTask("");
    };
    const changeHandler = (e) => {
        setTask(e.target.value);
    };
    const addTaskHandler = (e) => {
        e.preventDefault();
        const text = task.trim()
        if(text.length){
            setTaskList(prev => [{id: uuidv4(),'text' : text, isEditing : false, isCompleted : false}, ...prev,])
        }
        resetField();
    };
    return (
        <form 
            onSubmit={addTaskHandler}
            className="w-full max-w-xl mb-6"
        >
        <div className="flex gap-2">
            <input
            placeholder='Write your task...'
            name='text'
            type="text"
            className="flex-1 p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={task}
            onChange={changeHandler}
            />
            <button 
                type="submit"
                className="px-5 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-500 transition-colors duration-200"
            >
                Add Task
            </button>
        </div>
        </form>
    );
}
