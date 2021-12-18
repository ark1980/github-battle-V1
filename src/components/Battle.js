import React from 'react'
import Instruction from './Instruction';
import PlayerInput from './PlayerInput'
import PlayerPreview from './PlayerPreview';

class Battle extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       playerOne: null,
       playerTwo: null,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  handleSubmit(id, player) {
    this.setState({
      [id]: player
    })
  }

  handleReset(id) {
    this.setState({
      [id]: ''
    })
  }
  
  render() {
    const {playerOne, playerTwo} = this.state
    return(
      <>
        <Instruction />
        <div className='player-container'>
          <h1 className='center-text header-lg'>Players</h1>
          <div className='row space-around'>
            {!playerOne ? 
              <PlayerInput
              label='Player One'
              onSubmit={(player) => this.handleSubmit('playerOne', player)}
            /> :
              <PlayerPreview 
                username={this.state.playerOne} 
                onReset={() => this.handleReset('playerOne')}
                label="Player One"
              />
            }

            {!playerTwo ? 
              <PlayerInput
              label='Player Two'
              onSubmit={(player) => this.handleSubmit('playerTwo', player)}
            /> :
              <PlayerPreview 
                username={this.state.playerTwo} 
                onReset={() => this.handleReset('playerTwo')}
                label="Player Two"
              />
            }
          </div>
        </div>
      </>
    )
  }
}

export default Battle;