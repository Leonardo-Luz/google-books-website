import { Outlet } from 'react-router-dom'
import './App.css'

import { Nav } from './components/Nav.component'
import { Footer } from './components/Footer.component'

function App() {
  return (
    <>
      <Nav />

      <Outlet />

      <Footer />
    </>
  )
}

export default App
