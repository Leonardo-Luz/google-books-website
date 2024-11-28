import { NavLink } from 'react-router-dom'
import '../styles/nav.style.css'

export const Nav = () => {

  return (
    <div className='nav-container'>
      <NavLink
        to='/'
        className='nav-title'
      >
        Google Books
      </NavLink>
    </div>
  )
}
