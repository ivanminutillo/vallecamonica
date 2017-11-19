import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Markdown from 'react-remarkable'
import Header from '../components/Header'
import Footer from '../components/Footer'

class NetworkRoute extends React.Component {
  render () {
    const { title, subtitle, menu, author } = this.props.data.site.siteMetadata
    return (
      <div>
        <Helmet title={`All Tags - ${title}`} />
        <Header
          menu={menu}
          social={author}
        />
        <Markdown source={Content} />
        <Footer
          menu={menu}
          social={author}
        />
      </div>
    );
  }
}

NetworkRoute.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired
      })
    }),
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.array.isRequired
    })
  })
};

export default NetworkRoute

export const pageQuery = graphql`
  query NetworkRoute {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        menu {
          label
          path
        }
        author {
          name
          email
          telegram
          twitter
          github
        }
      }
    }
    allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
