import React from 'react'
import PropTypes from 'prop-types'

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
      <form className='column player' onSubmit={this.handleSubmit}>
        <label htmlFor='username' className='player-label'>
          {this.props.label}
        </label>
        <div className='row player-inputs'>
          <input
            id='username'
            className='input-light'
            type="text"
            onChange={this.handleChange}
            placeholder='Github Username'
            value={this.state.username}
          />
          <button 
            type="submit" 
            className='btn dark-btn'
            disabled={!this.state.username}
          >submit
          </button>
        </div>
      </form>
    )
  }
}

PlayerInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}
