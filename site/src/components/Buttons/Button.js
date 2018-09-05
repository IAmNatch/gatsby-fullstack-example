import React from 'react';
import styled from 'styled-components';

// Use text for content
import { Text } from '../Text/Text.js';
import { colors } from '../color-palette.js';
import Link from 'gatsby-link';

const ButtonBase = styled(Link)`
  transition: 0.5s ease;
  background: #0000001a;
  padding: ${props => (props.small ? `0.5rem 1.5rem` : `1rem 3rem`)};
  margin: ${props => props.margin || '0'};
  ${props => (props.width ? `width: ${props.width}` : '')};
  border: ${props => (props.small ? `0.1rem` : `0.2rem`)} solid white;
  border-radius: 50px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-decoration: none;
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

const Icon = styled.img`
  margin-left: 1em;
`;

export const Button = props => {
  return (
    <ButtonBase onclick="" {...props}>
      <Text color="white" size={props.small ? 'p' : 'small'}>
        {props.content}
      </Text>
      {props.icon ? <Icon src={props.icon} /> : ' '}
    </ButtonBase>
  );
};
