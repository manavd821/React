import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: 1,
        text : "Hello world",
        isEditing : false,
        isCompleted : false,
    }]
}
export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        addTodo : (state, action) => {
            const todo = {
                id: nanoid(),
                text : action.payload,
                isEditing : false,
                isCompleted : false,
            }
            state.todos.push(todo)
        },

        removeTodo : (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        updateTodo : (state, action) => {
            state.todos = state.todos.map(todo => todo.id === action.payload.id ? {...todo, text : action.payload.text} : todo)
        },
        toggleComplete : (state, action) => {
            state.todos = state.todos.map(todo => todo.id === action.payload ? {...todo, isCompleted : !todo.isCompleted} : todo);
        },
        toggleIsEditing : (state, action) => {
            state.todos = state.todos.map(todo => todo.id === action.payload ? {...todo, isEditing : !todo.isEditing} : todo);
        },
    }
})

export const {addTodo, removeTodo, updateTodo, toggleComplete, toggleIsEditing} = todoSlice.actions

export default todoSlice.reducer