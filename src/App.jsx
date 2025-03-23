import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import HomePage from './components/Home Page/HomePage'
import SignUp from './components/Signup/SignUp'
import Login from './components/Login/Login'
import AccountSettings from './components/Account/Account'

function App() {

  const router = createBrowserRouter([
    {
      path : "/",
      element : <HomePage />
    },
    {
      path: "/signup",
      element : <SignUp />
    },
    {
      path : "/login",
      element : <Login />
    },
    {
      path : "/account",
      element : <AccountSettings />
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
