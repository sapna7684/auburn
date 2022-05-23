import React from 'react'
import {Link} from 'react-router-dom'

export const NavbarMenu = () => {
  return (
    <ul className='navMenu'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/">Reservation</Link></li>
        <li><Link to="/">News</Link></li>
        <li><Link to="/">Locations</Link></li>
    </ul>
  )
}
