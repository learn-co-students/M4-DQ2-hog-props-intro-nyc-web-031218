import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import Baby from '../assets/baby-hog.png'
import SunBaby from '../assets/sun-eyes.png'
import BlueBaby from '../assets/blue-eyes.png'
import GlowingBaby from '../assets/glowing-eyes.png'



class BabyHog extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: props.name,
      weight: props.weight,
      imgHeight: 200
    }
  }

  imgMapper = {
    'blue': BlueBaby,
    'glowing': GlowingBaby,
    'sun': SunBaby
  }

  selectImg = () => {
    return this.imgMapper[this.props.eyeColor]

  }

  changeWeight(event) {
    event.preventDefault()
    if (!isNaN(this.state.weight)){
      if (event.target.id){
        this.setState({weight: parseInt(this.state.weight) + 1, imgHeight: parseInt(this.state.imgHeight) + 1})
      } else {
        if (this.state.weight > 0){
          this.setState({weight: parseInt(this.state.weight) - 1, imgHeight: parseInt(this.state.imgHeight) - 1})
        }
      }
    }


  }

  render() {
    return (
        <li className="hogbabies">
          <h1>{this.state.name}</h1>
          <h3>Weight: {this.state.weight}</h3>
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
