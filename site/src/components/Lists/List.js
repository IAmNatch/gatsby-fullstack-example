import React from 'react';
import styled from 'styled-components';
import { Text } from '../';

export const List = props => {
  if (props.ordered) {
    return (
      <ol>
        {props.content.map((item, index) => (
          <ListItem {...props} key={`listKey${index}`} content={item} />
        ))}
      </ol>
    );
  } else {
    return (
      <UnorderedList {...props}>
        {props.content.map((item, index) => (
          <ListItem {...props} key={`listKey${index}`} content={item} />
        ))}
      </UnorderedList>
    );
  }
};

const UnorderedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${props => (props.margin ? props.margin : '')}};

  @media only screen and (max-width: 768px) {
    ${props => (props.mobileMargin ? `margin: ${props.mobileMargin}` : '')};
  }
`;
const ListItemBase = styled.li`
  ${props => (props.horizontal ? 'display: inline-block' : '')};
`;
const ListItem = props => (
  <ListItemBase {...props}>
    <Text
      margin={'1.5rem'}
      size="subtitle"
      color={props.color || colors.purpleDark}
    >
      {props.content}
    </Text>
  </ListItemBase>
);
