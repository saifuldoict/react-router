import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-red-600 p-4 space-x-11 text-white font-bold mb-4'>
      <Link to={'/home'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <Link to={'/products'}>Products</Link>
      <Link to={'/contact'}>Contact</Link>
      <Link to={'/dashboard'}>Dashboard</Link>
      <Link to={'/blogs'}>Blog</Link>
    
    </div>
  )
}

export default Navbar