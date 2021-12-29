import React, { Component } from 'react'
import {FaMoon, FaSun} from 'react-icons/fa'
import {ThemeConsumer} from './context/ThemeContext'

const Navbar = (props) => {
  return(
    <ThemeConsumer>
      {({theme, toggleTheme}) => (
        <nav className='nav row space-between'>
          <button 
            onClick={toggleTheme} 
            style={{fontSize: 30, color:'#e28743'}}
            className='btn-clear'>
            {theme === 'ligth' ? <FaMoon /> : <FaSun />}
          </button>
        </nav>
      )}
    </ThemeConsumer>
  )
}

export default Navbar;