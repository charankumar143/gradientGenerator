import styled from 'styled-components'

export const MainContainer = styled.div`
  background-image: linear-gradient(${props => props.direction});
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Heading = styled.h1`
  font-size: 25px;
`
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`
