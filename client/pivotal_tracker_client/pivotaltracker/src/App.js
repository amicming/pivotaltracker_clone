import React, { Component } from 'react'
import './App.css'
import StoriesContainer from './components/StoriesContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Pivotal Tracker</h1>
        </header>
          <StoriesContainer />
      </div>
    );
  }
}

export default App
