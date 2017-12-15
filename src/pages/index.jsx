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
import Tabs from '../components/Tabs'
import Todo from '../components/Todo'
import Footer from '../components/Footer'

class IndexRoute extends React.Component {
  render () {
    const { title, subtitle, author, menu } = this.props.data.site.siteMetadata
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
  }
`
