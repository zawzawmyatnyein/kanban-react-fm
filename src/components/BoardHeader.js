import Button from './Button'
import { PlusIcon } from '@heroicons/react/24/outline'
import Dropdown from './Dropdown'

function BoardHeader() {
  return (
    <header className="shrink-0 h-24 px-8 flex justify-between items-center">
      <h1 className="text-2xl font-bold tracking-wide text-black dark:text-white">
        Platform Launch
      </h1>
      <div className="flex items-center gap-x-4">
        <Button name="Add New task">
          <PlusIcon className="w-3 h-3" strokeWidth={4} />
        </Button>
        <Dropdown />
      </div>
    </header>
  )
}

export default BoardHeader
