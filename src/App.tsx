import React from 'react'
import { Modal } from './components/Modal'
import { useState } from 'react'

function App() {
  const [open, setOpen] = useState(true)
  return (
    <>
      <Modal
        open={open}
        description={'Employee Created !'}
        onClose={() => setOpen(false)}
      />
    </>
  )
}

export default App
