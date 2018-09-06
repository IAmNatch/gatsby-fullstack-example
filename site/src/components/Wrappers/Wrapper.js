import React from 'react';
import styled from 'styled-components';

const WrapperBase = styled.div`
  display: grid;
  grid-template-rows: ${props => (props.rows ? props.rows : '')};
  grid-template-columns: ${props => (props.columns ? props.columns : '')};
  background: ${props => (props.background ? props.background : '')};
  ${props => (props.minHeight ? `min-height: ${props.minHeight}` : '')};

  @media only screen and (max-width: 768px) {
    ${props =>
      props.mobileRows ? `grid-template-rows: ${props.mobileRows}` : ''};
  }
`;

export const Wrapper = props => {
  return <WrapperBase {...props}>{props.children}</WrapperBase>;
};
