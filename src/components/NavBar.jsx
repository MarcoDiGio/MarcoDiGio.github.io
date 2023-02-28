import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    const [active, setActive] = useState(false)

  return (
    <nav className='navbar'>
        <img className='img' alt='logo' src='/D.png' />
        <div className={active ? 'toggle-button active' : 'toggle-button'} onClick={() => setActive(state => !state)}>
            <span className='bar1'></span>
            <span className='bar2'></span>
            <span className='bar3'></span>
        </div>
        <ul className={ active ? 'nav-links active' : 'nav-links'}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar