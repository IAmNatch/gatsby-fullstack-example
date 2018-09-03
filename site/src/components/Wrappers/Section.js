import React from 'react'
import styled from 'styled-components'

const SectionBase = styled.section`
  grid-row: ${props => (props.row ? props.row : '')};
  grid-column: ${props => (props.column ? props.column : '')};
  z-index: 1;
  background: ${props => (props.background ? props.background : '')};

  ${props => (props.flex ? 'display: flex' : '')};
  ${props => (props.wrap ? 'flex-wrap: wrap' : '')};
  ${props => (props.direction ? `flex-direction: ${props.direction}` : '')};
  justify-content: ${props => (props.justify ? props.justify : '')};
  align-items: ${props => (props.align ? props.align : '')};
`

export const Section = props => {
  return <SectionBase {...props}>{props.children}</SectionBase>
}
