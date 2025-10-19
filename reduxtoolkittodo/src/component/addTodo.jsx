import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

export default function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const changeHandler = (e) => {
        setInput(e.target.value);
    };
    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('')
    }
    return (
        <form 
            onSubmit={addTodoHandler}
            className="w-full max-w-xl mb-6"
        >
        <div className="flex gap-2">
            <input
            placeholder='Write your task...'
            name='text'
            type="text"
            className="flex-1 p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={input}
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
