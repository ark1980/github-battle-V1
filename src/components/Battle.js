import React from 'react'
import Instruction from './Instruction';
import PlayerInput from './PlayerInput'
import PlayerPreview from './PlayerPreview';
import Results from './Results'

class Battle extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       playerOne: null,
       playerTwo: null,
       battle: false,
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
    const { playerOne, playerTwo, battle } = this.state

    if (battle === true) {
      return <Results playerOne={playerOne} 
                      playerTwo={playerTwo} 
                      onReset={() => this.setState({battle: false, playerOne:null, playerTwo:null})} 
            />
    }

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

            {playerOne && playerTwo && 
              <button 
                className='btn dark-btn btn-space' onClick={() => this.setState({battle: true})}>
                battle
              </button>
            }

        </div>
      </>
    )
  }
}

export default Battle;