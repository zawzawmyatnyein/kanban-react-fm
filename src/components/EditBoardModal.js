import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Button from './Button'
import InputGroup from './InputGroup'
import InputLabel from './InputLabel'
import InputText from './InputText'
import { PlusIcon } from '@heroicons/react/24/outline'

function EditBoardModal({ isOpen, closeModal }) {
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
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 space-y-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-lg font-semibold leading-6 text-gray-900">
                  Edit Board
                </Dialog.Title>
                <InputGroup>
                  <InputLabel labelName="Name" htmlFor="name" />
                  <InputText type="text" id="name" name="name" />
                </InputGroup>
                <InputGroup>
                  <InputLabel labelName="Columns" />
                  <ul className="space-y-4">
                    <li>
                      <InputText type="text" name="columns.0.name" />
                    </li>
                    <li>
                      <InputText type="text" name="columns.1.name" />
                    </li>
                  </ul>
                </InputGroup>
                <Button size="xs" rounded={true} variant="secondary">
                  <PlusIcon className="w-3 h-3" strokeWidth={3} />
                  Add New Column
                </Button>
                <Button size="xs" rounded={true}>
                  Save Changes
                </Button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default EditBoardModal
