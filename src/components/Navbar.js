import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display: 'flex', alignItems:'space-between'}}>
      <span className='logo'>REDUX Store</span>
      <div>
        <Link className='navLink' to="/">Home</Link>
        <Link className='navLink' to="/cart">Cart</Link>
      </div>
      <span className='cartCount'>Cart items: 0</span>
    </div>
  )
}

export default Navbar
