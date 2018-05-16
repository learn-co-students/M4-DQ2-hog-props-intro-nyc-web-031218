import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import Baby from '../assets/baby-hog.png'
import SunBaby from '../assets/sun-eyes.png'
import BlueBaby from '../assets/blue-eyes.png'
import GlowingBaby from '../assets/glowing-eyes.png'
// import MasterHog from '../containers/MasterHog.js'

const imgMapper = {
  'blue': BlueBaby,
  'glowing': GlowingBaby,
  'sun': SunBaby
}

class BabyHog extends Component {

  constructor(props) {
    super(props)
    this.state = {
      imgHeight: 100
    }
    // console.log(MasterHog);
    // MasterHog.state.offspring.push(this)
  }

  selectImg = () => {
    if(this.props.eyeColor === 'blue'){
      return imgMapper.blue
    } else if(this.props.eyeColor === "glowing"){
      return imgMapper.glowing
    } else if (this.props.eyeColor === "sun"){
      return imgMapper.sun
    }
  }

  changeWeight(event) {
    event.preventDefault()

  }

  render() {
    return (
        <li className="hogbabies">
          <h1>{this.props.name}</h1>
          <h3>Weight: {this.props.weight}</h3>
          <h4>Eye Color: {this.props.eyeColor}</h4>
          <div className="wrap-crap">
            <Button animated id="increase" onClick={this.changeWeight.bind(this)}>
              <Button.Content id="increase" visible>Increase Weight</Button.Content>
              <Button.Content id="increase" hidden>
                <Icon id="increase" name='plus' />
              </Button.Content>
            </Button>

            <Button animated onClick={this.changeWeight.bind(this)}>
              <Button.Content visible>Decrease Weight</Button.Content>
              <Button.Content hidden>
                <Icon name='minus' />
              </Button.Content>
            </Button>
          </div>


          <img src={this.selectImg()} style={{height: `${this.state.imgHeight}px`}} alt="MasterBlasterJrJr" />


        </li>
    )
  }
}

export default BabyHog;
