import React, { Component } from 'react'
import LangaugesNav from './LangaugesNav'
import {fetchLanguageRepos} from './utils/api'

export class Popular extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedLanguage: 'All',
      repos: null,
      error: null
    }
    this.updateLanguage = this.updateLanguage.bind(this)
    this.isLoading = this.isLoading.bind(this)
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(language) {
    this.setState({
      selectedLanguage: language,
      repos: null,
      error: null
    })

    fetchLanguageRepos(language)
    .then(repos => this.setState({
      repos,
      error: null
    }))
    .catch(error => {
      console.warn('Error fetching repos: ', error);

      this.setState({
        error: 'There was an error fetching the repositories.'
      })
    })
  }

  isLoading() {
    return this.state.repos === null && this.state.error === null
  }

  render() {
    const {repos, error, selectedLanguage} = this.state;
    return (
      <>
        <LangaugesNav 
          selected={selectedLanguage}
          updateLanguage={this.updateLanguage}
        />

        {this.isLoading() && <p>IS LOADING...</p>}
        
        {error && <p>{error}</p>}

        {repos && <pre>{JSON.stringify(repos, null, 2)}</pre>}
      </>
    )
  }
}

export default Popular
