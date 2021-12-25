import React, { Component } from 'react'
import LangaugesNav from './LangaugesNav'
import {fetchLanguageRepos} from './utils/api'
import ReposList from './ReposList'
import Loading from './Loading'

export class Popular extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedLanguage: 'All',
      repos: {},
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
      error: null
    })
    // caching repos to not sending request to 
    // fetch data everytime we click on a language
    if (!this.state.repos[language]) {
      fetchLanguageRepos(language)
        .then(data => {
          this.setState(({ repos }) => ({
            repos: {
              ...repos,
              [language]: data
            }
          }))
        })
        .catch((err) => {
          console.warn('Error fetching repos: ', err)
  
          this.setState({
            error: 'There was an error to fetching repositories'
          })
        })
    }
  }

  isLoading() {
    const {repos, error, selectedLanguage} = this.state;

    return !repos[selectedLanguage] && error === null
  }

  render() {
    const {repos, error, selectedLanguage} = this.state;
    return (
      <>
        <LangaugesNav 
          selected={selectedLanguage}
          updateLanguage={this.updateLanguage}
        />

        {this.isLoading() && <Loading text='Fetching Popular Repos'/>}
        
        {error && <p>{error}</p>}

        {repos[selectedLanguage] && <ReposList repos={repos[selectedLanguage]}/>}
      </>
    )
  }
}

export default Popular
