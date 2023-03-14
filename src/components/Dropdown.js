import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'

function Dropdown() {
  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-lg py-1 text-sm font-medium text-white hover:bg-light-gray dark:hover:bg-black/30 focus:outline-none focus:bg-light-gray dark:focus:bg-black/30 focus:ring-1 focus:ring-medium-gray/20">
            <EllipsisVerticalIcon
              className="h-7 w-7 text-medium-gray"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="z-50 absolute right-0 mt-2 w-44 origin-top-right divide-y divide-gray-100 rounded-lg bg-white dark:bg-very-dark-gray shadow-lg shadow-card-shadow dark:ring-1 dark:ring-black/5 focus:outline-none">
            <div className="px-2 py-2 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active && 'bg-very-light-blue dark:bg-dark-gray'
                    } text-medium-gray group flex w-full items-center rounded-md px-2 py-2`}
                  >
                    Edit Board
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active && 'bg-very-light-blue dark:bg-dark-gray'
                    } text-red group flex w-full items-center rounded-md px-2 py-2`}
                  >
                    Delete Board
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

export default Dropdown
