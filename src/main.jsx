import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Home,VideolDetail } from './Components/Exporter.js'
import UserContextProvider from './Context/UserContextProvider'




// Creating routes here
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route path='/' element={<Home />} />
      <Route path='/video/:id' element={<VideolDetail />} />
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider  >
    <RouterProvider router={router} />
  </UserContextProvider>
)
