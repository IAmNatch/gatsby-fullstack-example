import React from 'react';
import styled from 'styled-components';

// Use text for content
import { Text, Button } from '../';
import { colors } from '../color-palette.js';
import Link from 'gatsby-link';
import logo from '../../assets/logo.png';

const NavBase = styled.div`
  z-index: 10;
  display: flex;
  justify-content: space-evenly;

  grid-row: ${props => (props.row ? props.row : '')};
  grid-column: ${props => (props.column ? props.column : '')};

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
  }
`;

const NavSide = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

const NavLeft = styled(NavSide)``;
const NavRight = styled(NavSide)`
  justify-content: space-around;
`;

const NavList = styled.ul`
  display: inline-flex;
  list-style: none;
  align-items: center;

  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
  }
`;
const NavItem = styled.li`
  padding: 10px;
  color: white;
  font-size: 1rem;
  font-weight: 100;
  transition: border 0.5s ease;
  border-bottom: 1px solid transparent;
  :hover {
    border-bottom: 1px solid white;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const Logo = styled.img`
  width: 2rem;
  margin-right: 1rem;
`;

const LogoText = styled(Text)`
  font-size: 1.5em;
  font-weight: bolder;
`;

export const Nav = props => {
  const { items, actionButton, wrap } = props;

  return (
    <NavBase row={`1 / 2`} column={`2 / 4`}>
      <NavLeft>
        <Logo src={logo} />
        <LogoText color={colors.white} size="medium">
          {props.title}
        </LogoText>
      </NavLeft>
      <NavRight>
        <NavList wrap={wrap}>
          {items.map((item, index) => {
            return (
              <NavItem key={`navItem${index}`}>
                <NavLink activeStyle={{ fontWeight: '500' }} to={item.url}>
                  {item.name}
                </NavLink>
              </NavItem>
            );
          })}
          <NavLink to={actionButton.url}>
            <Button content={actionButton.name} small margin={'0 0 0 .5rem'}>
            </Button>
          </NavLink>
        </NavList>
      </NavRight>
    </NavBase>
  );
};
