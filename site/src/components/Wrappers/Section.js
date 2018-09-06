import React from 'react';
import styled from 'styled-components';
import { DivProto } from '../Prototypes';

const SectionBase = styled(DivProto)`
  grid-row: ${props => (props.row ? props.row : '')};
  grid-column: ${props => (props.column ? props.column : '')};
  z-index: 1;
  background: ${props => (props.background ? props.background : '')};
  ${props => (props.minHeight ? `min-height: ${props.minHeight}` : '')};

  ${props => (props.flex ? 'display: flex' : '')};
  ${props => (props.wrap ? 'flex-wrap: wrap' : '')};
  ${props => (props.direction ? `flex-direction: ${props.direction}` : '')};
  justify-content: ${props => (props.justify ? props.justify : '')};
  align-items: ${props => (props.align ? props.align : '')};
`;

export const Section = props => {
  return (
    <SectionBase as="section" {...props}>
      {props.children}
    </SectionBase>
  );
};
