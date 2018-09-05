import React from 'react';
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
  console.log(data);
  return (
    <Wrapper columns={`10vw 40vw 40vw 10vw`} rows={`[nav] auto [jumbo] auto`}>
      <Background
        column={`1/5`}
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
          margin={'15% 0 30%'}
          mobileMargin={'15% 0 110% 0'}
        >
          <Text color={'white'} size="large">
            RUH ROH!
          </Text>
          <Text size="small" color="white" block>
            You don't have to go home, but you can't stay here.
          </Text>
          <Button to={'/'} content={'hi boo'} margin={'10% 0 0 0'} />
        </Box>
      </Section>
    </Wrapper>
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
