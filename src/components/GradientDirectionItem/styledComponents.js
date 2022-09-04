import styled from 'styled-components'

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  list-style-type: none;
`
export const ButtonItem = styled.button`
  margin: 5px;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`
