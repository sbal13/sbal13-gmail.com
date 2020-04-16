import React, { useState } from 'react'

const Login = ({ login }) => {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    login(input)
  }

  return (
    <div className="login-form">
      <h4>Login</h4>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={(e) => setInput(e.target.value)}/>
      </form>
    </div>
  )
}

export default Login