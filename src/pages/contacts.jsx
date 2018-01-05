import React from 'react'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'
import Intro from '../components/Intro'

class Contact extends React.Component {
  render () {
    const { title, menu } = this.props.data.site.siteMetadata
    return (
      <div>
        <Helmet>
          <title>vallecamonica</title>
          <meta name="description" />
        </Helmet>
        <Intro menu={menu} image={'join'} title={'Contattaci'} />
        <div className='page_body'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit tortor quis est convallis, sit amet viverra mauris aliquam. Integer consequat orci vel nibh pulvinar, vel tincidunt leo pretium. Etiam pretium lacinia tortor. Donec at massa quis lacus scelerisque placerat in sed est. Cras leo ante, ultricies sit amet varius a, rutrum a quam. Duis posuere a arcu vitae porta. In in aliquet lacus, eget dapibus erat. Nunc vel hendrerit ligula. Donec volutpat mattis sem, a rutrum lacus efficitur in.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit tortor quis est convallis, sit amet viverra mauris aliquam. Integer consequat orci vel nibh pulvinar, vel tincidunt leo pretium. Etiam pretium lacinia tortor. Donec at massa quis lacus scelerisque placerat in sed est. Cras leo ante, ultricies sit amet varius a, rutrum a quam. Duis posuere a arcu vitae porta. In in aliquet lacus, eget dapibus erat. Nunc vel hendrerit ligula. Donec volutpat mattis sem, a rutrum lacus efficitur in.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit tortor quis est convallis, sit amet viverra mauris aliquam. Integer consequat orci vel nibh pulvinar, vel tincidunt leo pretium. Etiam pretium lacinia tortor. Donec at massa quis lacus scelerisque placerat in sed est. Cras leo ante, ultricies sit amet varius a, rutrum a quam. Duis posuere a arcu vitae porta. In in aliquet lacus, eget dapibus erat. Nunc vel hendrerit ligula. Donec volutpat mattis sem, a rutrum lacus efficitur in.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit tortor quis est convallis, sit amet viverra mauris aliquam. Integer consequat orci vel nibh pulvinar, vel tincidunt leo pretium. Etiam pretium lacinia tortor. Donec at massa quis lacus scelerisque placerat in sed est. Cras leo ante, ultricies sit amet varius a, rutrum a quam. Duis posuere a arcu vitae porta. In in aliquet lacus, eget dapibus erat. Nunc vel hendrerit ligula. Donec volutpat mattis sem, a rutrum lacus efficitur in.
        </div>
        <Footer
        />
      </div>
    );
  }
}

export default Contact

export const pageQuery = graphql`
query ContactQuery {
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
