import React, { useState, useEffect } from 'react';
import Login from './Login'
import UpdateUser from './UpdateUser'
import MainBody from './MainBody'
import Dialog from './Dialog'

function App() {

  const [user, setUser] = useState(null)
  const [categories, setCategories] = useState([])
  const [updatingUser, setUpdatingUser] = useState(false)

  const login = (username) => {
    fetch('http://localhost:8080/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        username
      })
    })
    .then(res => res.json())
    .then(resp => setUser(resp))
  }

  useEffect(() => {
    fetch('http://localhost:8080/categories')
    .then(res => res.json())
    .then(setCategories)
  }, [])

  const updateUser = (username) => {
    fetch(`http://localhost:8080/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        username
      })
    })
    .then(res => res.json())
    .then(resp => {
      setUser(resp)
      setUpdatingUser(false)
    })
  }

  return (
    <div className="App">
      <Dialog open={!user}>
        <Login login={login}/>
      </Dialog>
      <Dialog open={updatingUser}>
        <UpdateUser updateUser={updateUser} />
      </Dialog>
      <MainBody user={user} categories={categories} setUpdatingUser={setUpdatingUser} />
    </div>
  );
}

export default App;
