import React, { useState } from 'react'

const UpdateUser = ({ updateUser }) => {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    updateUser(input)
  }
  
  return (
    <div className="login-form">
      <h4>Update User Name</h4>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={(e) => setInput(e.target.value)}/>
      </form>
    </div>
  )
}

export default UpdateUser