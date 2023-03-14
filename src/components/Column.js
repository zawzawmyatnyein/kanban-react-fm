import Task from './Task'

function Column({ column }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-x-3 text-xs font-bold text-medium-gray uppercase tracking-[0.2em]">
        <span className="inline-block w-4 h-4 rounded-full bg-cyan-400"></span>
        {column.name} ({column.tasks?.length})
      </div>
      <ul className="flex flex-col space-y-6">
        {column.tasks.map(task => (
          <Task task={task} key={task.id} />
        ))}
      </ul>
    </div>
  )
}

export default Column
