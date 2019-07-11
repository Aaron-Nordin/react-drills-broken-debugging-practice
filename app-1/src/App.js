import React, { Component } from 'react'
import './App.css'

//was missing constructor
class App extends Component {
constructor() {
  super()
  this.state = {
    input: ""
  }
}

  handleInput(value) {
    this.setState({
      input: value
    })
  }

  render() {
    return (
      <div className="App">
        {/* was missing .target.value */}
        <input onChange={(e) => this.handleInput(e.target.value)} />
        <h1>{this.state.input}</h1>
      </div>
    )
  }
}

export default App
