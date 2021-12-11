import React, { Component } from 'react'
import LangaugesNav from './LangaugesNav'

export class Popular extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedLanguage: 'All'
    }
    this.updateLanguage = this.updateLanguage.bind(this)
  }

  updateLanguage(language) {
    this.setState({selectedLanguage: language})
  }

  render() {
    return (
      <>
        <LangaugesNav 
          selected={this.state.selectedLanguage}
          updateLanguage={this.updateLanguage}
        />
      </>
    )
  }
}

export default Popular
