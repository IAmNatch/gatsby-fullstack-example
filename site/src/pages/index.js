import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

// Components
import {
  Card,
  Text,
  Button,
  Nav,
  colors,
  Wrapper,
  Box,
  Section,
  Line,
  Icon,
} from '../components';
import { Offer } from '../components/ProjectSpec/Offers';
import icon from '../components/assets/thumbs_up.svg';
import { seedCards, seedOffers } from '../seed_data';

const Background = styled.div`
  background: ${props => props.background};
  grid-row: ${props => (props.row ? props.row : '')};
  grid-column: ${props => (props.column ? props.column : '')};
  background-size: ${props => (props.size ? props.size : 'cover')};
  z-index: 1;
`;

const List = props => {
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

// Setting Up Cards
let cards = seedCards.map((item, index) => {
  return (
    <Card key={`mainCards${index}`} icon={item.icon} shadow>
      <LazyLoad height={200} once>
        <Card.Icon src={item.icon} />
      </LazyLoad>
      <Card.Title>{item.title}</Card.Title>
      <Card.Subtitle>{item.subtitle}</Card.Subtitle>
    </Card>
  );
});
let rowOne = cards.slice(0, 3);
let rowTwo = cards.slice(3, 5);

const IndexPage = () => (
  <div>
    <Wrapper
      columns={`10vw 40vw 40vw 10vw`}
      rows={`[nav] auto [jumbo] auto [services] auto [values] auto [offers] auto [contact] auto [footer] auto`}
    >
      <Background
        column={`1/5`}
        row={'1/3'}
        size={'cover'}
        background={`url(/background.svg)`}
      />
      <Nav
        items={[
          { name: 'Home', url: '/' },
          { name: 'Solutions', url: '/anything' },
          { name: 'Technology', url: '/else' },
          { name: 'Contact', url: '/butHere' },
        ]}
        actionButton={{ name: 'Email Now', url: '#' }}
      />

      <Section row={'jumbo'} column={'2/4'}>
        <Box margin={'15% 0'} mobileMargin={'15% 0 30% 0'}>
          <Text margin={'0 0 1rem 0'} color={'white'} size="large">
            Focus on Smart Care
          </Text>
          <Text size="small" color="white" block>
            Specialized in cool healthcare.
          </Text>
          <Button margin={'10% 0 0 0'} icon={icon}>
            Watch the Video
          </Button>
        </Box>
      </Section>
      <Background row={'services'} column={'1/5'} background={'#FCF9FE'} />
      <Section row={'services'} column={'2/4'}>
        <Box margin={'-3rem 0 3rem'} mobileMargin={'-4rem 0 3rem'}>
          <Box wrap flex>
            {rowOne}
          </Box>
          <Box wrap flex>
            {rowTwo}
          </Box>
        </Box>
      </Section>
      <Section row={'values'} column={'2/4'}>
        <Box
          flex
          direction={'column'}
          margin={'5rem 0 1rem'}
          align={'center'}
          justify={'center'}
        >
          <LazyLoad once height={100}>
            <Icon src={'assets/brush.svg'} width={'3rem'} />
          </LazyLoad>
          <Text color={colors.purpleDark} margin={'1rem'} size="small" block>
            Core Value
          </Text>
          <Line color={colors.purpleDark} margin={'.5rem 0'} />
        </Box>
        <Box
          flex
          justify={'center'}
          mobileDirection={'column'}
          mobileTAlign={'center'}
        >
          <Box flex justify={'center'} width="60%" mobileWidth={'100%'}>
            <Box flex align={'flex-end'} margin={'0 0 1rem 0'}>
              <LazyLoad height={500} once>
                <Icon width={'100%'} src="/assets/vectors/laptop.svg" />
              </LazyLoad>
            </Box>
          </Box>
          <Box
            flex
            align={'center'}
            justify={'center'}
            mobileWidth={'100%'}
            mobileTAlign={'center'}
            width="40%"
          >
            <List
              margin={'3rem 0 0 0'}
              mobileMargin={'2rem 0 0 0'}
              color={colors.purpleDark}
              content={[
                'Hello this is cool',
                'Coolness part two',
                'Another one, the second coming',
                'Cool girls fast rides',
                'One more to make it right',
              ]}
            />
          </Box>
        </Box>
      </Section>
      <Background row={'offers'} column={'1/5'} background={'#FCF9FE'} />
      <Section row={'offers'} column={'2/4'}>
        <Box
          flex
          direction={'column'}
          margin={'3em 0 2rem'}
          align={'center'}
          justify={'center'}
        >
          <LazyLoad height={100} once>
            <Icon src={'assets/ruler.svg'} width={'3rem'} />
          </LazyLoad>
          <Text
            color={colors.purpleDark}
            margin={'1rem'}
            TAlign={'center'}
            size="small"
            block
          >
            Smart Useful Things
          </Text>
          <Box flex wrap justify={'center'} margin={'4rem 0 0rem'}>
            {/* Map over offers */}
            {seedOffers.map((item, index) => (
              <Offer key={`mainOffers${index}`} {...item} />
            ))}
          </Box>
        </Box>
        <Icon />
      </Section>
      <Background row="contact" column={'1/5'} background="#7C21FF" />
      <Section row="contact" column="1/5">
        <Box
          flex
          margin={'1rem'}
          justify={'space-between'}
          mobileDirection={'column'}
          mobileTAlign={'center'}
          align="center"
        >
          <Box margin={'0'}>
            <Text size="small" color={colors.white} block>
              Contact Us
            </Text>
            <Text
              TAlign={'right'}
              letterSpaceing={'.6rem'}
              color={colors.white}
              size="p"
              block
            >
              Or else
            </Text>
          </Box>
          <Box>
            <Text letterSpaceing={'.6rem'} color={colors.white} size="p" block>
              416.953.7702
            </Text>
          </Box>
        </Box>
      </Section>
      <Section column={'1/5'} row="footer">
        {/* Make footer component and be done!!*/}
      </Section>
    </Wrapper>
  </div>
);

export default IndexPage;
