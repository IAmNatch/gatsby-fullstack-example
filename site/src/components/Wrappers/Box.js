import React from 'react';
import styled from 'styled-components';

export const Box = styled.div`
  color: ${props => props.color || 'black'};
  margin: ${props => props.margin || '0'};
  padding: ${props => props.padding || '0'};
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  ${props => (props.flex ? 'display: flex' : '')};
  ${props => (props.flexwrap ? 'flex-wrap: wrap' : '')};
  ${props => (props.direction ? `flex-direction: ${props.direction}` : '')};
  background: ${props => (props.background ? props.background : '')};
  justify-content: ${props => (props.justify ? props.justify : '')};
  align-items: ${props => (props.align ? props.align : '')};
  ${props => (props.TAlign ? `text-align: ${props.TAlign}` : '')};

  @media only screen and (max-width: 768px) {
    ${props => (props.mobileMargin ? `margin: ${props.mobileMargin}` : '')};
    ${props =>
      props.mobileDirection ? `flex-direction: ${props.mobileDirection}` : ''};
    ${props => (props.mobileAlign ? `align-items: ${props.mobileAlign}` : '')};
    ${props =>
      props.mobileJustify ? `justify-content: ${props.mobileJustify}` : ''};
    ${props => (props.mobileWidth ? `width: ${props.mobileWidth}` : '')};
    ${props => (props.mobileTAlign ? `text-align: ${props.mobileTAlign}` : '')};
  }
`;
