import { useEffect, useState } from "react";
import { useTaskList } from "../context/TaskListContext";
import Task from "./Task";

export default function TaskList() {
  const { taskList, setTaskList } = useTaskList();

  const editBtnHandler = (id) => {
    const updatedList = taskList.map((task) => {
      // task => task.id == id ? {...task, isEditing : !task.isEditing} : task
      if (task.id == id) {
        return { ...task, isEditing: !task.isEditing };
      }
      return task;
    });
    setTaskList(updatedList);
  };
  const changeHandler = (e, id) => {
    const updatedList = taskList.map((task) =>
      task.id == id ? { ...task, text: e.target.value } : task
    );
    setTaskList(updatedList);
  };
  const toggleComplete = (id) => {
    const updatedList = taskList.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTaskList(updatedList);
  };
  const deleteTaskHandler = (id) => {
    const updatedTaskList = taskList.filter(task => task.id !== id)
    setTaskList(updatedTaskList)
  }
// When app reload, get all todo from local storage
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0){
      setTaskList(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(taskList))
  },[taskList])



  return (
    <div className="w-full max-w-xl flex flex-col gap-3">
      {taskList.map((task) => (
        <Task key={task.id} {...{task, toggleComplete, changeHandler, editBtnHandler, deleteTaskHandler}}/>
      ))}
    </div>
  );
}
