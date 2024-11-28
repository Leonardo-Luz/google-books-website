import { Outlet } from 'react-router-dom'

import { Nav } from './components/Nav.component'
import { Footer } from './components/Footer.component'

function App() {
  return (
    <div className='main-container'>
      <Nav />

      <Outlet />

      <Footer />
    </div>
  )
}

export default App
