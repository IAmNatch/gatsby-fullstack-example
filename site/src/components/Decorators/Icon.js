import React from 'react'
import styled from 'styled-components'
import { colors } from '../'

const IconBase = styled.img`
  width: ${props => (props.width ? props.width : '6rem')};
  user-drag: none;
  user-select: none;
`
const Round = styled.div`
  width: ${props => (props.width ? props.width : '6rem')};
  height: ${props => (props.width ? props.width : '6rem')};
  border-radius: ${props => (props.width ? props.width : '6rem')};
  background: ${props => (props.color ? props.color : colors.blueLight)};
  border: 4px solid
    ${props => (props.border ? props.border : colors.purpleDark)};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;

  transition: 0.5s ease-in-out;

  :hover {
    transform: scale(1.5);
    margin-bottom: 2rem;
  }
`

export const Icon = props => {
  if (props.round) {
    return (
      <Round>
        <IconBase {...props} />
      </Round>
    )
  } else {
    return <IconBase {...props} />
  }
}
