function Task(props) {
  return (
    <div
      className={` ${
        props.completed ? 'bg-green-500' : 'bg-gray-100'
      } w-[500px] h-[80px] flex gap-[20px] justify-between items-center p-5 rounded-md`}
    >
      <h3 className="text-2xl font-bold">{props.taskName}</h3>
      <div className="flex gap-2">
        <button
          className="bg-green-600 p-2 rounded-md font-medium text-white"
          onClick={() => props.completeTask(props.id)}
        >
          Check
        </button>
        <button
          className="bg-red-500 p-2 rounded-md font-medium text-white"
          onClick={() => props.deleteTask(props.id)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default Task
