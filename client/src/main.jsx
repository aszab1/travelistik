import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import './index.css'

// Page components 
import App from './App.jsx'
import Register from '../src/components/Register'
import Login from '../src/components/Login'
import Home from '../src/components/Home'
// import Logout from '../src/components/Logout.jsx';

// actions
import { registerUser, loginUser } from './utils/actions/auth.js'

const router = createBrowserRouter(
  [{
    path: '/',
    element: <App />,
    children: [
      {
        path: '/auth/register/',
        element: <Register />,
        action: async ({ request }) => registerUser(request)
      },
      {
        path: '/auth/login/',
        element: <Login />,
        action: async ({ request }) => loginUser(request)
      },
      // {
      //   path: '/logout/',
      //   element: <Logout />,
      //   action: async () => logoutUser()
      // },
      {
        path: '/home/',
        element: <Home />,
        // add loader function
      }
    ]
  }]
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
