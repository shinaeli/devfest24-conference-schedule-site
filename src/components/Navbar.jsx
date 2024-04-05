import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="container">
        <nav className="desktop-nav">
            <h1 className='dosis-bold brand'>DevFest24</h1>
            <ul>
                <li>
                    <Link className='dosis-semibold nav-link' to="/location">Location</Link>
                </li>
                <li>
                    <Link className='dosis-semibold nav-link' to="/food">Food</Link>
                </li>
                <li>
                    <Link className='dosis-semibold nav-link' to="/schedule">Schedule</Link>
                </li>
            </ul>
        </nav>
        <nav className="mobile-nav">
            <h1 className='dosis-bold brand'>DevFest24</h1>
            {showMenu && (<section className="side-bar">
                <div onClick={() => setShowMenu(false)} className="close-menu">
                    <img src="/assets/Icons/close_FILL0_wght400_GRAD0_opsz24.svg" alt="close icon" />
                </div>
                <ul>
                    <li>
                        <Link className='dosis-semibold nav-link' to="/location">Location</Link>
                    </li>
                    <li>
                        <Link className='dosis-semibold nav-link' to="/food">Food</Link>
                    </li>
                    <li>
                        <Link className='dosis-semibold nav-link' to="/schedule">Schedule</Link>
                    </li>
                </ul>
            </section>)}
            {!showMenu && (<div onClick={() => setShowMenu(true)} className="menu">
                <img src="/assets/Icons/menu_FILL0_wght400_GRAD0_opsz24.svg" alt="menu icon" />
            </div>)}
        </nav>
    </div>
  )
}

export default Navbar