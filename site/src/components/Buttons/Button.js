import React from 'react';
import styled from 'styled-components';

// Use text for content
import { Text } from '../Text/Text.js';
import { colors } from '../color-palette.js';
import Img from 'gatsby-image';

const ButtonBase = styled.button`
  transition: 0.5s ease;
  background: #0000001a;
  padding: ${props => (props.small ? `0.5rem 1.5rem` : `1rem 3rem`)};
  margin: ${props => props.margin || '0'};
  border: ${props => (props.small ? `0.1rem` : `0.2rem`)} solid white;
  border-radius: 50px;
  margin: ${props => (props.margin ? props.margin : ``)};

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  :focus {
    outline: none;
  }
  :hover {
    background-color: #b5b5b51a;
  }

  @media only screen and (max-width: 768px) {
    padding: ${props => (props.small ? `0.25rem .75rem` : `.5rem 1.5rem`)};
  }
`;

const Icon = styled(Img)`
  margin-left: 1em;
`;

export const Button = props => {
  console.log('all props', props);
  console.log('icon', props.icon);
  return (
    <ButtonBase onclick="" {...props}>
      <Text color="white" size={props.small ? 'p' : 'small'}>
        {props.children}
      </Text>
      {props.icon ? [<Icon resolutions={props.icon} />] : ' '}
    </ButtonBase>
  );
};
