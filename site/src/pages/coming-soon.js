import React from 'react';
import Helmet from 'react-helmet';
import {
  Nav,
  Wrapper,
  Background,
  Section,
  colors,
  Text,
  Box,
  Button,
} from '../components';

const NotFoundPage = ({ data }, props) => {
  return (
      [<Helmet
        title={`${data.site.siteMetadata.title} | Coming Soon`}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
    />,
    <Wrapper columns={`10vw 40vw 40vw 10vw`} rows={`[nav] 10vh [jumbo] auto`}>
      <Background
        column={`1/5`}
        height={'100vh'}
        width={'100vw'}
        row={'1/3'}
        size={'cover'}
        background={`url(/background.svg)`}
      />
      <Nav
        items={data.nav.frontmatter.navItems}
        title={data.site.siteMetadata.title}
        actionButton={{ name: 'Email Now', url: '#' }}
        color={'white'}
      />
      <Section row={'jumbo'} column={'2/4'}>
        <Box
          flex
          justify={'center'}
          direction={'column'}
          margin={'15% 0 10%'}
          mobileMargin={'15% 0 110% 0'}
        >
          <Text color={'white'} size="large">
            RUH ROH!
          </Text>
          <Text size="small" color="white" block>
            We haven't built this page yet. You don't have to go home, but you
            can't stay here.
          </Text>
          <Button to={'/'} content={'Make Like a Tree'} margin={'10% 30%'} />
        </Box>
      </Section>
  </Wrapper>]
  );
};

export default NotFoundPage;

export const query = graphql`
  query ComingSoonQuery {
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
  }
`;
