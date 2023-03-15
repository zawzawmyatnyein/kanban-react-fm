import { EyeSlashIcon, PlusIcon } from '@heroicons/react/24/outline'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import BoardIcon from './BoardIcon'
import ThemeSwitch from './ThemeSwitch'
import CreateBoardModal from './CreateBoardModal'
import data from '../data/data.json'
import { useState } from 'react'

function Sidebar() {
  const { boards } = data

  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <>
      <div className="flex-1 py-6 flex flex-col justify-between">
        <nav>
          <h3 className="pl-8 uppercase text-medium-gray text-xs font-semibold tracking-[0.2em]">
            All Boards ({boards.length})
          </h3>
          <ul className="mt-4 font-bold tracking-wide space-y-1">
            {boards &&
              boards.map(board => (
                <li
                  key={board.id}
                  className={`mr-4 py-3 rounded-r-full ${
                    board.id === 0
                      ? 'bg-dark-blue text-white'
                      : 'text-medium-gray hover:text-dark-blue hover:bg-dark-blue-opacity'
                  }`}
                >
                  <a href="/" className="pl-8 flex items-center gap-x-4">
                    <BoardIcon color={board.id === 0 ? '#FFFFFF' : '#828FA3'} />
                    {board.name}
                  </a>
                </li>
              ))}
            <li className="py-3 text-dark-blue hover:opacity-70">
              <button onClick={openModal} className="pl-8 flex items-center gap-x-4">
                <BoardIcon color="#635FC7" />
                <span className="flex items-center gap-x-0.5">
                  <PlusIcon className="w-3 h-3" strokeWidth={3} /> Create New Board
                </span>
              </button>
            </li>
          </ul>
        </nav>
        <div className="space-y-6">
          <div className="flex space-x-6 justify-center items-center py-4 mx-8 bg-light-gray dark:bg-very-dark-gray rounded-md">
            <MoonIcon className="w-5 h-5 text-medium-gray" />
            <ThemeSwitch />
            <SunIcon className="w-5 h-5 text-medium-gray" />
          </div>
          <button className="inline-flex gap-x-4 items-center px-4 py-2 mx-8 text-medium-gray hover:text-medium-gray-opacity font-semibold text-sm">
            <EyeSlashIcon className="w-5 h-5" strokeWidth={2} /> Hide Sidebar
          </button>
        </div>
      </div>
      <CreateBoardModal isOpen={isOpen} closeModal={closeModal} />
    </>
  )
}

export default Sidebar
