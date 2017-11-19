import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Post from '../components/Post'
import BigImage from '../components/BigImage'
import Header from '../components/Header'
import Methodology from '../components/Methodology'
import Hero from '../components/Hero'
import Faircoin from '../components/Faircoin'
import Nodes from '../components/Nodes'
import Cta from '../components/Cta'
import Tabs from '../components/Tabs'
import Todo from '../components/Todo'
import Footer from '../components/Footer'

class IndexRoute extends React.Component {
  render () {
    const items = []
    const { title, subtitle, author, menu } = this.props.data.site.siteMetadata
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
        <Header menu={menu} social={author} />
        <Hero />
        <Tabs />
        <BigImage />
        <Methodology />
        <Faircoin />
        <Nodes />
        <Todo />
        <Footer />
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
          email
          telegram
          twitter
          github
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
