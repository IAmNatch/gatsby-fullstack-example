## Gatsby-NetlifyCMS-Spec

URL: https://gatsby-iamnatch.netlify.com/

ADMIN: https://gatsby-iamnatch.netlify.com/admin/
Note: Please request a test identity to explore the CMS.

### About

This project is an example website, made for no one, for the purpose of continuing to explore the benefits and workflows of the JAMStack. The technologies of primary focus include:

* Gatsby.js, powered by React
* Styled-Components
* NetlifyCMS
* Netlify Continuous Deployment
* Storybook as a component library explorer.

### Usage

Main Site:
To preview the site, navigate to the URL posted above. To install on your own machine:

#### Dev

1.  `cd site`
2.  `yarn` or `npm install`
3.  `gatsby develop`
4.  navigate to `localhost:8000`

#### Build and Serve

1.  `cd site`
2.  `yarn` or `npm install` - I find yarn works more consistently.
3.  `gatsby build`
4.  `gatsby serve`
5.  navigate to `localhost:9000`

#### Storybook

// Currently down due to relocation of components to Gatsby. WIP

1.  Navigate to project root (one above site)
2.  `yarn` or `npm install`
3.  `yarn run storybook` or `npm run storybook`
4.  navigate to `localhost:6006`
