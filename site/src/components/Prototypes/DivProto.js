import React from 'react';
import styled from 'styled-components';

// DESCRIPTION: The DivProto prototype provides all the core props for various
// wrappers and boxes. They inherit it and then add specific props as needed.
// Built with care to not polute the namespace is colide with browser API.

export const DivProto = styled.div`
  // Colors
  color: ${props => props.color || 'black'};
  background: ${props => (props.background ? props.background : '')};
  // Spacing and Sizing
  margin: ${props => props.margin || '0'};
  padding: ${props => props.padding || '0'};
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  ${props => (props.maxWidth ? `max-width: ${props.maxWidth}` : '')};
  ${props => (props.maxHeight ? `max-height: ${props.maxHeight}` : '')};
  ${props => (props.minHeight ? `min-height: ${props.minHeight}` : '')};
  ${props => (props.minWidth ? `min-width: ${props.minWidth}` : '')};
  ${props => (props.TAlign ? `text-align: ${props.TAlign}` : '')};
  // Flex
  ${props => (props.flex ? 'display: flex' : '')};
  ${props => (props.flexWrap ? 'flex-wrap: wrap' : '')};
  ${props => (props.direction ? `flex-direction: ${props.direction}` : '')};
  justify-content: ${props => (props.justify ? props.justify : '')};
  align-items: ${props => (props.align ? props.align : '')};

  // Media
  @media only screen and (max-width: 768px) {
    // Spacing
    ${props => (props.mobileMargin ? `margin: ${props.mobileMargin}` : '')};
    ${props => (props.mobilePadding ? `padding: ${props.mobilePadding}` : '')};
    ${props => (props.mobileWidth ? `width: ${props.mobileWidth}` : '')};
    ${props => (props.mobileHeight ? `height: ${props.mobileHeight}` : '')};
    ${props => (props.mobileTAlign ? `text-align: ${props.mobileTAlign}` : '')};
    // Flex
    ${props =>
      props.mobileDirection ? `flex-direction: ${props.mobileDirection}` : ''};
    ${props => (props.mobileAlign ? `align-items: ${props.mobileAlign}` : '')};
    ${props =>
      props.mobileJustify ? `justify-content: ${props.mobileJustify}` : ''};
  }
`;
