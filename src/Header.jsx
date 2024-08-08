import React from 'react'
import './Header.css'

function Header(){

    return(
        <header className='header'>
                <div className="extra-word">
        <a href="#contact" className="nav-link">Contact</a>
      </div>

            <nav className='nav'>
                <ul className='nav-list'>
                    <li className='nav-item'>
                        <a href='#home' className='nav-link'>Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#cv" className="nav-link">CV</a>
                    </li>
                    <li className="nav-item">
                        <a href="#projects" className="nav-link">Projects</a>
                    </li>
                </ul>



            </nav>
        </header>
    )
};

export default Header;