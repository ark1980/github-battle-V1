import React, { Component } from 'react'
import PropTypes from 'prop-types'

const styles = {
  content: {
    fontSize: '35px',
    position: 'absolute',
    left: '0',
    right: '0',
    marginTop: '20px',
    textAlign: 'center',
  }
}

export class Loading extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       content: this.props.text
    }
  }

  componentDidMount() {
    const { text, speed } = this.props;

    window.setInterval(() => {
      this.state.content === text + '...' ? 
      this.setState({content: text}) :
        this.setState((prevContent => (
          {content: prevContent.content + '.'}
        )))
    }, speed)
  }
  

  render() {
    return (
      <p style={styles.content}>
        {this.state.content}
      </p>
    )
  }
}

export default Loading

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired
}

Loading.defaultProps = {
  text: 'Loading',
  speed: 300
} 