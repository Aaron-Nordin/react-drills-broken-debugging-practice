import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      bobs: ['Bob Ross', 'Bob Hope', 'Bob Marley', 'Bob Saget', 'Bob Dylan', 'Bob Barker', 'Bob Newhart', 'Bob Downey Jr', 'Bob De Niro', 'Bob F. Kennedy', 'Bob Darin'],
      input: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      input: e
    })
  }

  render() {
    // missing () around what to use .map on
    // missing both .toLowerCase()'s to make it case insensitive
    let bobsList = this.state.bobs.filter(bob => bob.toLowerCase().includes(this.state.input.toLowerCase())).map(bob => (
      <h3 key={bob}>{bob}</h3>
    ))
    return (
      <div className="App">
        <h1>Famous Bobs</h1>
        {/* missing (e) => and missing (e.target.value) */}
        <h2>Filter: <input onChange={(e) => this.handleChange(e.target.value)} type="text"/></h2>
        {bobsList}
      </div>
    );
  }
}


export default App;
