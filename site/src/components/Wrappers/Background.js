import React from 'react';
import styled from 'styled-components';

export const Background = styled.div`
  background: ${props => props.background};
  grid-row: ${props => (props.row ? props.row : '')};
  grid-column: ${props => (props.column ? props.column : '')};
  background-size: ${props => (props.size ? props.size : 'cover')};
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  z-index: 1;
`;
