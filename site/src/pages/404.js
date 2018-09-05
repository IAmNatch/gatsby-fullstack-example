import React from 'react';
import { Nav, Wrapper, Background, Section, colors } from '../components';

const NotFoundPage = ({ data }, props) => {
  console.log(data);
  return (
    <div>
      <Wrapper
        minHeight={'100vh'}
        columns={`10vw 40vw 40vw 10vw`}
        rows={`[nav] 10vh [jumbo] auto`}
      >
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
        <Section row={'2/3'} minHeight={'100%'} column={'2/4'}>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </Section>
      </Wrapper>
    </div>
  );
};

export default NotFoundPage;

export const query = graphql`
  query FourOhFourPageQuery {
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
