import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Button from './Button'
import InputGroup from './InputGroup'
import InputLabel from './InputLabel'
import InputText from './InputText'
import { PlusIcon } from '@heroicons/react/24/outline'
import InputTextarea from './InputTextarea'
import InputSelect from './InputSelect'

const statuses = [{ name: 'Todo' }, { name: 'Doing' }, { name: 'Done' }]

function TaskModal({ isOpen, closeModal }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform rounded-lg bg-white p-6 space-y-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-lg font-semibold leading-6 text-gray-900">
                  Add New Task
                </Dialog.Title>
                <InputGroup>
                  <InputLabel labelName="Title" htmlFor="title" />
                  <InputText type="text" id="title" name="title" />
                </InputGroup>
                <InputGroup>
                  <InputLabel labelName="Description" htmlFor="description" />
                  <InputTextarea id="description" name="description" rows="4" />
                </InputGroup>
                <InputGroup>
                  <InputLabel labelName="Subtasks" />
                  <ul className="space-y-3">
                    <li>
                      <InputText type="text" name="subtasks.0.name" />
                    </li>
                    <li>
                      <InputText type="text" name="subtasks.1.name" />
                    </li>
                  </ul>
                </InputGroup>
                <Button size="xs" rounded={true} variant="secondary">
                  <PlusIcon className="w-3 h-3" strokeWidth={3} />
                  Add New Subtask
                </Button>
                <InputGroup>
                  <InputLabel labelName="Status" htmlFor="status" />
                  <InputSelect options={statuses} />
                </InputGroup>
                <Button size="xs" rounded={true}>
                  Create Task
                </Button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default TaskModal
