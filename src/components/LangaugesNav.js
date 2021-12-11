import React from 'react'
import PropTypes from 'prop-types'


const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']

const LangaugesNav = ({selected, updateLanguage}) => {
  return (
      <ul className="flex-center">
        {languages.map(lang => (
          <li key={lang}>
            <button 
              onClick={() => updateLanguage(lang)}
              className={selected === lang ? "btn-nav nav-link" : "btn-nav"}  
            >
              {lang}
            </button>
          </li>
        ))}
      </ul>
  )
}

export default LangaugesNav;


LangaugesNav.propTypes = {
  selected: PropTypes.string.isRequired,
  updateLanguage: PropTypes.func.isRequired
}