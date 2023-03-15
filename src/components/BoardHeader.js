import Button from './Button'
import { PlusIcon } from '@heroicons/react/24/outline'
import Dropdown from './Dropdown'
import { useState } from 'react'
import TaskModal from './TaskModal'

function BoardHeader() {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <>
      <header className="shrink-0 h-24 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide text-black dark:text-white">
          Platform Launch
        </h1>
        <div className="flex items-center gap-x-4">
          <Button type="button" rounded={true} onClick={openModal}>
            <PlusIcon className="w-3 h-3" strokeWidth={4} />
            Add New task
          </Button>
          <Dropdown />
        </div>
      </header>
      <TaskModal isOpen={isOpen} closeModal={closeModal} />
    </>
  )
}

export default BoardHeader
