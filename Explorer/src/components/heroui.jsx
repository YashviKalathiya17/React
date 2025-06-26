// src/components/heroui.jsx
import { Dialog } from '@headlessui/react'
import { useState } from 'react'

export default function Heroui() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="my-4">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 px-4 py-2 text-white rounded"
      >
        Open HeroUI Dialog
      </button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white p-6 rounded shadow">
            <Dialog.Title className="text-lg font-medium">Headless UI Dialog</Dialog.Title>
            <Dialog.Description>This is a dialog using HeroUI.</Dialog.Description>
            <button onClick={() => setIsOpen(false)} className="mt-4 btn btn-danger">
              Close
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  )
}
