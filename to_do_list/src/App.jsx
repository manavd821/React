import ToDoContainer from "./component/ToDoContainer"


function App() {

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center p-6">
      <header className="text-3xl font-bold mb-6">Manage your To-Do List</header>
      <ToDoContainer/>
    </div>
  )
}

export default App
