import React,{Component} from 'react'
import Popular from './components/Popular';
import './App.css';
import Battle from './components/Battle';

class App extends Component {
  

  render() {
    return (
      <div className="App">
        {/* <Popular /> */}
        <Battle />
      </div>
    )
  }
} 

export default App;
