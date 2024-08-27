import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='bg-red-200'>
      <ul className='flex gap-9 p-4'>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/posts'>Posts</NavLink></li>
        <li><NavLink to='/profile'>Profile</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>
      </ul>
    </nav>
  )
}

export default Nav