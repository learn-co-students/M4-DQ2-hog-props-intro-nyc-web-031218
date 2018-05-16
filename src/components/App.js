import React, { Component } from 'react'
import MasterHog from '../containers/MasterHog'
import Offspring from '../db.js'
import '../App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <div className="App">
        <MasterHog offspringProp={Offspring.key}/>
      </div>
    )
  }

}

export default App
