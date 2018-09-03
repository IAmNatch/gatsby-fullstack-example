import React from 'react'
import styled from 'styled-components'
import { colors } from '../'

export const Line = styled.div`
  width: 10em;
  margin: ${props => props.margin || '0'};
  border-bottom: 2px solid ${props => props.color || colors.purple};
`
