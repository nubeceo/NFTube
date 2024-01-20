import { Outlet } from 'react-router-dom'
import Header from './Header'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'

function App() {

  return (
    <UserContextProvider  >
      <Header />
      <Outlet />
    </UserContextProvider>
  )
}

export default App
