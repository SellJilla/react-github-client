import React from 'react'
import { NavLink } from 'react-router-dom'

const SideMenu = () => {
  return (
    <nav className='nav flex-column'>
      <NavLink className='nav-link' to="repositories">Repositories</NavLink>
      <NavLink className='nav-link' to="about">About</NavLink>
    </nav>
  )
}

export default SideMenu