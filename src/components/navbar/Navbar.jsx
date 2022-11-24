import React from 'react'
import { Link } from 'react-router-dom'

import './navbar.css'

export default function Navbar() {
  return (
    <div className='nav'>
      <Link className='logo' to={'/main'}>My Dash</Link>
      <Link to={'/tables'}>Table</Link>
      <Link to={'/about'}>About</Link>
      <Link to={'/company'}>Company</Link>
    </div>
  )
}
