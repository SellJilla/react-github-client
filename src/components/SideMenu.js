import React from 'react'
import { NavLink } from 'react-router-dom'

const SideMenu = () => {
  return (
    <nav className='nav nav-tabs nav-pills nav-fill nav-justified flex-column'>
      <NavLink className='nav-item nav-link' to="repositories">
        Repositories
      </NavLink>
      <NavLink className='nav-item nav-link' to="about">
        About
      </NavLink>
    </nav>
  )
}

export default SideMenu