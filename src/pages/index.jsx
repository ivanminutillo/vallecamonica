import React from 'react'
import Helmet from 'react-helmet'
import Hero from '../components/Hero'
import Webcams from '../components/Webcams'
import Sponsor from '../components/Sponsor'
import Instagram from '../components/Instagram'
import BigImage from '../components/BigImage'
import Footer from '../components/Footer'
class IndexRoute extends React.Component {
  render () {
    const { title, subtitle, menu } = this.props.data.site.siteMetadata
    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={subtitle} />
        </Helmet>
        <Hero
          menu={menu}
        />
        <Webcams />
        <Sponsor />
        <Instagram />
        <BigImage />
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
