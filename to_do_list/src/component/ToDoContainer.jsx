import AddTaskContainer from "./AddTaskContainer";
import TaskList from "./TaskList";
import { TaskListProvider, useTaskList } from "../context/TaskListContext";
import { useState } from "react";

export default function ToDoContainer() {
  return (
    <TaskListProvider >
      <AddTaskContainer/>
      <TaskList/>
    </TaskListProvider>
  )
}
