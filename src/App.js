import React,{Component} from 'react'
import Popular from './components/Popular';
import Navbar from './Navbar';
import Battle from './components/Battle';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       theme: 'light',
       toggleTheme: () => {
         this.setState(({ theme }) => ({
           theme: theme === 'light' ? 'dark' : 'light'
         }))
       }
    }
  }
  
  render() {
    return (
      <ThemeProvider value={this.state}>
        <div className='app'>
          <div className="container">
          <div className={this.state.theme}>
            <Navbar />
            {/* <Popular /> */}
            <Battle />
          </div>
          </div>
        </div>
      </ThemeProvider>
    )
  }
} 

export default App;
