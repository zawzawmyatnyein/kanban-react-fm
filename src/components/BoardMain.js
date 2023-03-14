import { PlusSmallIcon } from '@heroicons/react/24/solid'
import data from '../data/data.json'
import Column from './Column'

function BoardMain() {
  const { boards } = data
  const board = boards[0]

  return (
    <div className="flex-1 overflow-scroll px-8 py-6 bg-light-gray dark:bg-very-dark-gray">
      <div className="flex space-x-8">
        {board.columns?.map(column => (
          <Column column={column} key={column.id} />
        ))}

        <button className="w-64 h-[500px] mt-10 text-2xl font-bold tracking-wide text-medium-gray hover:text-dark-blue transition-colors bg-medium-gray-gradient rounded-lg flex gap-x-2 justify-center items-center shrink-0">
          <PlusSmallIcon className="w-5 h-5" strokeWidth={5} />
          New Column
        </button>
        <div className="w-1 shrink-0"></div>
      </div>
    </div>
  )
}

export default BoardMain
