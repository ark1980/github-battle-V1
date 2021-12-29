import React from 'react'
import PropTypes from 'prop-types'
import { ThemeConsumer } from '../context/ThemeContext'

export default class PlayerInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({username: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onSubmit(this.state.username)
  }
  
  render() {
    return (
      <ThemeConsumer>
      {({theme}) => (
        <form className='column player' onSubmit={this.handleSubmit}>
          <label htmlFor='username' className='player-label'>
            {this.props.label}
          </label>
          <div className='row player-inputs'>
            <input
              id='username'
              className={`input-${theme}`}
              type="text"
              onChange={this.handleChange}
              placeholder='Github Username'
              value={this.state.username}
            />
            <button 
              type="submit" 
              className={`btn ${theme}-btn`}
              disabled={!this.state.username}
            >submit
            </button>
          </div>
        </form>
      )}
      </ThemeConsumer>
    )
  }
}

PlayerInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}
