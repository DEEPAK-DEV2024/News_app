import React from 'react'
import logo from '../assets/logo.png';

function Header() {
  return (
    <div className='logo'>
      <img src={logo} alt='Logo' className='logo-img' />
    </div>
  )
}

export default Header;