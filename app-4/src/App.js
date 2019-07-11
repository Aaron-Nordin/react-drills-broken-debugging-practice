import React, { Component } from 'react'
import './App.css'
//missing Login import
import Login from "./components/Login"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login/>
      </div>
    )
  }
}

export default App
