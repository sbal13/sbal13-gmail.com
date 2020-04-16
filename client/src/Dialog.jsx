import React, { useState } from 'react'

const Dialog = ({ open, children}) => {
  if (!open) return null

  return (
    <div className="dialog-overlay">
      <div className="login-dialog">
        {children}
      </div>
    </div>
  )
}

export default Dialog