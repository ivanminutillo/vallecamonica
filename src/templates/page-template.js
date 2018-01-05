import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import PageTemplateDetails from '../components/PageTemplateDetails'
import Footer from '../components/Footer'

class PageTemplate extends React.Component {
  render () {
    const { title, menu, author } = this.props.data.site.siteMetadata
    // const page = this.props.data.markdownRemark

    return (
      <div>
        <Helmet>
          <title>{`${title}`}</title>
          <meta name="description" />
        </Helmet>
        <PageTemplateDetails {...this.props} />
        <Footer
          menu={menu}
          social={author}
        />
      </div>
    )
  }
}

PageTemplate.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired
      })
    })
  })
}

export default PageTemplate

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
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
  }
`
