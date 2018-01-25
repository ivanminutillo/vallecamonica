import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import kebabCase from 'lodash/kebabCase'

class CategoriesRoute extends React.Component {
  render() {
    const { title } = this.props.data.site.siteMetadata;

    return (
      <div>
        <Helmet title={`All Categories - ${title}`} />
        <div className="content">
          <div className="content__inner">
            <div className="page">
              <h1 className="page__title">Categories</h1>
              <div className="page__body">

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CategoriesRoute

export const pageQuery = graphql`
  query CategoryesQuery {
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
