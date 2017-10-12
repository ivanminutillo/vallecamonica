import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Post from '../components/Post'
import BigImage from '../components/BigImage'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Faircoin from '../components/Faircoin'
import Work from '../components/Work'
import Cta from '../components/Cta'
import Tabs from '../components/Tabs'
import Todo from '../components/Todo'

class IndexRoute extends React.Component {
  render() {
    const items = []
    const { title, subtitle } = this.props.data.site.siteMetadata
    const posts = this.props.data.allMarkdownRemark.edges
    posts.forEach((post) => {
      items.push(
        <Post data={post} key={post.node.fields.slug} />
      )
    })

    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={subtitle} />
        </Helmet>
        <Header />
        <Hero />
        <Tabs />
        <BigImage />
        <Faircoin />
        <Work />
        <Cta />
        <Todo />
        {/* <Sidebar {...this.props} /> */}
        {/* <div className="content">
          <div className="content__inner">
            {items}
          </div>
        </div> */}
      </div>
    )
  }
}

IndexRoute.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired
      })
    }),
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array.isRequired
    })
  })
}

export default IndexRoute

export const pageQuery = graphql`
  query IndexQuery {
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
          rss
          vk
        }
      }
    }
    allMarkdownRemark(
        limit: 1000,
        filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } },
        sort: { order: DESC, fields: [frontmatter___date] }
      ){
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            category
            description
          }
        }
      }
    }
  }
`
