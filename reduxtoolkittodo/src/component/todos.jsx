import { useSelector, useDispatch } from "react-redux";
import {
  updateTodo,
  removeTodo,
  toggleComplete,
  toggleIsEditing
} from "../features/todo/todoSlice";

export default function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const editBtnHandler = (id) => {
    dispatch(toggleIsEditing(id))
  }
  return (
    <div>
      {todos.map((task) => (
        <div key={task.id}>
          <div
            className={`flex items-center gap-2 p-3 rounded-lg border transition-colors duration-200
                            ${
                              task.isCompleted
                                ? "bg-gray-700 border-gray-600 opacity-70"
                                : "bg-gray-800 border-gray-700"
                            }
            `}
          >
          {/* to do completed checkbox */}
            <input
              type="checkbox"
              name="checkbox"
              className="w-5 h-5 text-indigo-500 bg-gray-700 border-gray-600 rounded focus:ring-2 focus:ring-indigo-400"
              checked={task.isCompleted}
              onChange={() => dispatch(toggleComplete(task.id))}
            />
            {/* to do list text */}
            <input
                    required
                    readOnly={!task.isEditing}
                    type="text"
                    name="text"
                    value={task.text}
                    onChange={(e) => dispatch(updateTodo({id : task.id, text : e.target.value}))}
                    onKeyDown={(e) =>
                    e.key === "Enter" ? editBtnHandler(task.id) : null
                    }
                    className={`flex-1 p-2 rounded bg-gray-900 border border-gray-700 transition-all duration-200 ${
                    task.isCompleted
                        ? "line-through text-gray-500 cursor-not-allowed"
                        : task.isEditing
                        ? "focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        : "cursor-pointer"
                    }`}
                />
                {/* edit btn */}
                <button
                    disabled={task.isCompleted}
                    onClick={() => editBtnHandler(task.id)}
                    className="p-2 hover:bg-gray-700 rounded transition-colors duration-200"
                >
                    <i
                    className={
                        task.isEditing
                        ? "fa-solid fa-floppy-disk text-green-400"
                        : "fa-solid fa-pen text-gray-300"
                    }
                    ></i>
                </button>
                {/* delete btn */}
                <button
                    onClick={(e) => dispatch(removeTodo(task.id))}
                    className="p-2 hover:bg-gray-700 rounded transition-colors duration-200"
                >
                    <i className="fa-solid fa-trash text-red-500"></i>
                </button>
          </div>
        </div>
      ))}
    </div>
  );
}
