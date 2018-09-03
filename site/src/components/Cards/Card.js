import React from 'react';
import styled from 'styled-components';

// Use text for content
import { Text, Icon } from '../';
import { colors } from '../color-palette.js';
// Example asset
import icon from '../assets/lightbulb_idea.svg';

const CardBase = styled.div`
  margin: 1rem;
  padding: 2rem 1rem;
  min-height: 5rem;
  min-width: 6rem;
  background: ${props => (props.color ? props.color : colors.white)};
  ${props =>
    props.shadow ? `box-shadow: 4px 7px 20px 0px rgba(0, 0, 0, 0.1)` : ''};
  border-radius: 10px;
  ${props => (props.growOff ? 'flex-grow: 0;' : `flex-grow: 1;`)};

  display: flex;
  align-items: center;
  flex-direction: column;
  transition: 0.2s ease-in-out;

  &:hover {
    transform: scale(0.98, 0.98);
    ${props => (props.shadow ? `3px 2px 20px 0px rgba(0,0,0,0.1)` : '')};
  }
`;

const Title = props => (
  <Text color={colors.purpleDark} size="medium">
    {props.children}
  </Text>
);

const Subtitle = props => (
  <Text color={colors.purpleLight} size="subtitle">
    {props.children}
  </Text>
);

const CardIcon = props => <Icon {...props} />;

export class Card extends React.Component {
  static Title = Title;
  static Subtitle = Subtitle;
  static Icon = CardIcon;

  render() {
    return (
      <CardBase onclick="" {...this.props}>
        {this.props.children}
      </CardBase>
    );
  }
}
