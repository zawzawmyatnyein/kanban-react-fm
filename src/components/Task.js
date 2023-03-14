function Task({ task }) {
  const completedSubtasks = task.subtasks.filter(
    subtask => subtask.isCompleted === true,
  )

  return (
    <li className="flex flex-col w-72 px-4 py-6 space-y-3 list-none bg-white dark:bg-dark-gray hover:opacity-60 dark:border dark:border-dark-gray-line rounded-lg shadow-md dark:shadow-card-shadow cursor-pointer">
      <h4 className="text-sm text-black dark:text-white font-bold tracking-wide">
        {task.title}
      </h4>
      <small className="text-xs text-medium-gray font-semibold">
        {completedSubtasks.length} of {task.subtasks.length} subtasks
      </small>
    </li>
  )
}

export default Task
