import {ButtonContainer, ButtonItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {value, renderDirection, isActive, displayText} = props

  const onChangeValue = event => {
    renderDirection(event.target.value)
  }

  return (
    <ButtonContainer>
      <li>
        <ButtonItem
          type="button"
          isActive={isActive}
          onClick={onChangeValue}
          value={value}
        >
          {displayText}
        </ButtonItem>
      </li>
    </ButtonContainer>
  )
}
export default GradientDirectionItem
