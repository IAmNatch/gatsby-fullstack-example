import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';
import Helmet from 'react-helmet';
import {
  SlideInLeft,
  SlideInDown,
  FadeIn,
} from 'animate-css-styled-components';

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

const IndexPage = ({ data }) => {
  let { nav, pageData, site } = data;
  let { siteMetadata } = site;
  let navItems = nav.frontmatter.navItems;
  let {
    title,
    jumbotron,
    offers,
    services,
    values,
    footer,
  } = pageData.frontmatter;

  let cards = services.cards.map((item, index) => {
    return (
      <Card key={`mainCards${index}`} icon={item.icon} shadow>
        <LazyLoad offset={200} height={200} once>
          <Card.Icon src={`/${item.icon.split('/static/')[1]}`} />
        </LazyLoad>
        <Card.Title>{item.cardTitle}</Card.Title>
        <Card.Subtitle>{item.cardSubtitle}</Card.Subtitle>
      </Card>
    );
  });
  let rowOne = cards.slice(0, 3);
  let rowTwo = cards.slice(3, 5);

  return (
    <div>
      <Helmet title={`${data.site.siteMetadata.title} | Home`} />
      <Wrapper
        columns={`10vw 40vw 40vw 10vw`}
        rows={`[nav] 10vh [jumbo] auto [services] auto [values] auto [offers] auto [contact] auto [footer] auto`}
      >
        <Background
          column={`1/5`}
          row={'1/3'}
          size={'cover'}
          background={`url(/background.svg)`}
        />
        <Nav
          title={siteMetadata.title}
          items={navItems}
          actionButton={{ name: 'Email Now', url: '#' }}
        />

        <Section row={'jumbo'} column={'2/4'}>
          <Box margin={'15% 0'} mobileMargin={'15% 0 30% 0'}>
            <FadeIn duration={'2s'}>
              <SlideInLeft duration={'1s'} easingFunction={'easeInOut'}>
                <Text margin={'0 0 1rem 0'} color={'white'} size="large">
                  {jumbotron.jumboHeader}
                </Text>
                <Text size="small" color="white" block>
                  {jumbotron.jumboSubheader}
                </Text>
                <Button
                  width={'16rem'}
                  content={jumbotron.videoCta}
                  margin={'10% 0 0 0'}
                  icon={icon}
                  onClick={() => alert("|//? You've been tricked! ?\\\\|")}
                />
              </SlideInLeft>
            </FadeIn>
          </Box>
        </Section>
        <Background row={'services'} column={'1/5'} background={'#FCF9FE'} />
        <Section row={'services'} column={'2/4'}>
          <Box margin={'-3rem 0 3rem'} mobileMargin={'-4rem 0 3rem'}>
            <Box flexwrap flex>
              {rowOne}
            </Box>
            <Box flexwrap flex>
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
            <LazyLoad once offset={100} height={100}>
              <Icon
                src={`/${values.icon.split('/static/')[1]}`}
                width={'3rem'}
              />
            </LazyLoad>
            <Text color={colors.purpleDark} margin={'1rem'} size="small" block>
              {values.valueTitle}
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
                <LazyLoad offset={100} height={500} once>
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
                content={values.valuesList.map(item => item.value)}
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
            <LazyLoad offset={100} height={100} once>
              <Icon
                src={`/${offers.icon.split('/static/')[1]}`}
                width={'3rem'}
              />
            </LazyLoad>
            <Text
              color={colors.purpleDark}
              margin={'1rem'}
              TAlign={'center'}
              size="small"
              block
            >
              {offers.title}
            </Text>
            <Box flex flexwrap justify={'space-around'} margin={'4rem 0 0rem'}>
              {/* Map over offers */}
              {offers.cards.map((item, index) => {
                console.log(item);
                return (
                  <Offer
                    key={`mainOffers${index}`}
                    title={item.cardTitle}
                    subtitle={item.cardSubtitle}
                    icon={`/${item.icon.split('/assets/')[1]}`}
                  />
                );
              })}
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
                {footer.title}
              </Text>
              <Text
                TAlign={'right'}
                letterSpaceing={'.6rem'}
                color={colors.white}
                size="p"
                block
              >
                {footer.subtitle}
              </Text>
            </Box>
            <Box>
              <Text
                letterSpaceing={'.6rem'}
                color={colors.white}
                size="p"
                block
              >
                {footer.contact}
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
};

export default IndexPage;

export const query = graphql`
  query homePageQuery {
    site {
      siteMetadata {
        title
      }
    }
    nav: markdownRemark(frontmatter: { title: { eq: "NavItems" } }) {
      id
      frontmatter {
        navItems {
          name
          url
        }
      }
    }
    pageData: markdownRemark(frontmatter: { title: { eq: "Home Page" } }) {
      id
      frontmatter {
        title
        jumbotron {
          jumboHeader
          jumboSubheader
          videoCta
          videoUrl
        }
        services {
          title
          cards {
            cardSubtitle
            cardTitle
            icon
          }
        }
        values {
          icon
          valueTitle
          valuesList {
            value
          }
        }
        offers {
          icon
          title
          cards {
            icon
            cardTitle
            cardSubtitle
          }
        }
        footer {
          title
          subtitle
          contact
        }
      }
    }
  }
`;
