import {Component} from 'react'

import {MainContainer, Heading, ButtonContainer} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeDirection: gradientDirectionsList[0].value,
    firstValue: '#8ae323',
    secondValue: '#014f7b',

    gradientValue: `to ${gradientDirectionsList[0].value}, '#8ae323', #014f7b`,
  }

  onChangeFirstValue = event => {
    this.setState({firstValue: event.target.value})
  }

  onChangeSecondValue = event => {
    this.setState({secondValue: event.target.value})
  }

  renderDirection = direction => {
    this.setState({activeDirection: direction})
  }

  onClickGenerate = () => {
    const {firstValue, secondValue, activeDirection} = this.state
    this.setState({
      gradientValue: `to ${activeDirection}, ${firstValue}, ${secondValue}`,
    })
  }

  render() {
    const {
      firstValue,
      secondValue,

      gradientValue,
      activeDirection,
    } = this.state
    console.log(activeDirection)
    return (
      <MainContainer data-testid="gradientGenerator" direction={gradientValue}>
        <Heading>Generate a CSS Color Gradient</Heading>
        <p>Choose Direction</p>

        <ul>
          <ButtonContainer>
            {gradientDirectionsList.map(eachItem => (
              <GradientDirectionItem
                key={eachItem.directionId}
                value={eachItem.value}
                displayText={eachItem.displayText}
                renderDirection={this.renderDirection}
                isActive={activeDirection === eachItem.value}
              />
            ))}
          </ButtonContainer>
        </ul>

        <p>Pick the Colors</p>
        <p>{firstValue}</p>
        <p>{secondValue}</p>
        <input
          type="color"
          value={firstValue}
          onChange={this.onChangeFirstValue}
        />
        <input
          type="color"
          value={secondValue}
          onChange={this.onChangeSecondValue}
        />
        <button type="button" onClick={this.onClickGenerate}>
          Generate
        </button>
      </MainContainer>
    )
  }
}

export default GradientGenerator
