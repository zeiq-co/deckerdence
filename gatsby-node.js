const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructuring the createPage function from the actions object
  const { createPage, createRedirect } = actions;
  const result = await graphql(`
    query {
      allSanityVehicleHirePage {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
      allSanityMainPage {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
      allSanityGalleryPage {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
      allSanityBlogPage {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
      allSanityAgreement {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }
  // Create blog post pages.
  result.data.allSanityVehicleHirePage.edges.forEach(({ node }) => {
    createPage({
      path: `/${node.slug.current}`,
      component: path.resolve(`./src/templates/hireOptionPage.js`),
      context: {
        slug: node.slug.current,
      },
    });
  });
  result.data.allSanityMainPage.edges.forEach(({ node }) => {
    createPage({
      path: node.slug.current,
      component: path.resolve(`./src/templates/mainPage.js`),
      context: {
        slug: node.slug.current,
      },
    });
  });
  result.data.allSanityGalleryPage.edges.forEach(({ node }) => {
    createPage({
      path: `/${node.slug.current}`,
      component: path.resolve(`./src/templates/galleryPage.js`),
      context: {
        slug: node.slug.current,
      },
    });
  });
  result.data.allSanityBlogPage.edges.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.slug.current}`,
      component: path.resolve(`./src/templates/blogArticle.js`),
      context: {
        slug: node.slug.current,
      },
    });
  });
  result.data.allSanityAgreement.edges.forEach(({ node }) => {
    createPage({
      path: `${node.slug.current}`,
      component: path.resolve(`./src/templates/agreement.js`),
      context: {
        slug: node.slug.current,
      },
    });
  });
  createRedirect({
    fromPath: '/vintage-bus-bar-hire/contact-deckerdence/',
    toPath: '/contact',
    statusCode: 301,
  });
  createRedirect({
    fromPath: '/vintage-bus-bar-hire/hire-options/',
    toPath: '/hire',
    statusCode: 301,
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};
