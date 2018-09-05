import React from 'react';
import styled from 'styled-components';

export const Background = styled.div`
  background: ${props => props.background};
  grid-row: ${props => (props.row ? props.row : '')};
  grid-column: ${props => (props.column ? props.column : '')};
  background-size: ${props => (props.size ? props.size : 'cover')};
  z-index: 1;
`;
