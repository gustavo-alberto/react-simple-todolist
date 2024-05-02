import { useState } from 'react'
import Header from './components/Header'
import Task from './components/Task'

function App() {
  const [todoList, setTodoList] = useState([])
  const [newTask, setNewTask] = useState('')

  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    }
    const newTodoList = [...todoList, task]
    setTodoList(newTodoList)
  }

  const deleteTask = (id) => {
    const newTodoList = todoList.filter((task) => {
      if (task.id === id) {
        return false
      } else {
        return true
      }
    })
    setTodoList(newTodoList)
  }

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true }
        } else {
          return task
        }
      })
    )
  }

  return (
    <div>
      <Header />
      <div className="w-[80%] mx-auto flex flex-col justify-center items-center">
        <div className=" flex gap-[20px] w-[500px] p-5 m-8">
          <input
            type="text"
            placeholder="Task name..."
            onChange={handleChange}
            className="bg-gray-100 h-[50px] w-[300px] rounded-lg p-5 focus:outline-blue-500"
          />
          <button
            className="bg-blue-500 p-2 rounded-md w-[150px] text-white font-bold text-1xl"
            onClick={addTask}
          >
            Add Task
          </button>
        </div>
        <div className="w-[500px] flex flex-col justify-center items-center gap-[20px]">
          <h2 className="text-5xl font-bold">Items List</h2>
          {todoList.map((task, key) => {
            return (
              <Task
                key={key}
                taskName={task.taskName}
                id={task.id}
                completed={task.completed}
                deleteTask={deleteTask}
                completeTask={completeTask}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
