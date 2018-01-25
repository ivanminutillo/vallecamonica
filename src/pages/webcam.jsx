import React from 'react'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'
import Intro from '../components/Intro'


class Webcam extends React.Component {
  render () {
    const { title, menu, author } = this.props.data.site.siteMetadata
    return (
      <div>
        <Helmet>
          <title>{`${title}`}</title>
          <meta name="description" />
        </Helmet>
        <Intro menu={menu} image={'about'} title={'Le Webcam della Vallecamonica'} />
        <div className='page_tools'>
        <div className='content_webcams'>
            <div className='webcams_item'>
              <div className='item_photo'>
                <img src='https://picsum.photos/200' />
              </div>
              <a href='/castello-di-breno'>
                <h1 className='item_title'>Castello di Breno</h1>
              </a>
              <p>There is no denying the fact that the success of an advertisement lies mostly in the headline.</p>
              <div className='item_secondary'>
                <span className='secondary_photos'>Foto <o>10293</o></span>
              </div>
            </div>
            <div className='webcams_item'>
              <div className='item_photo'>
                <img src='https://picsum.photos/200' />
              </div>
              <a href='/rifugio-la-maralsina'>
                <h1 className='item_title'>Rifugio La Maralsina</h1>
              </a>
              <p>There is no denying the fact that the success of an advertisement lies mostly in the headline.</p>
              <div className='item_secondary'>
                <span className='secondary_photos'>Foto <o>10293</o></span>
              </div>
            </div>
            <div className='webcams_item'>
              <div className='item_photo'>
                <img src='https://picsum.photos/200' />
              </div>
              <a href='/rifugio-nigritella'>
                <h1 className='item_title'>Rifugio Nigritella</h1>
              </a>
              <p>There is no denying the fact that the success of an advertisement lies mostly in the headline.</p>
              <div className='item_secondary'>
                <span className='secondary_photos'>Foto <o>10293</o></span>
              </div>
            </div>
            <div className='webcams_item'>
              <div className='item_photo'>
                <img src='https://picsum.photos/200' />
              </div>
              <a href='/il-clan'>
                <h1 className='item_title'>Il Clan</h1>
              </a>
              <p>There is no denying the fact that the success of an advertisement lies mostly in the headline.</p>
              <div className='item_secondary'>
                <span className='secondary_photos'>Foto <o>10293</o></span>
              </div>
            </div>
            <div className='webcams_item'>
              <div className='item_photo'>
                <img src='https://picsum.photos/200' />
              </div>
              <a href='/clan-corrette'>
                <h1 className='item_title'>Clan Corrette</h1>
              </a>
              <p>There is no denying the fact that the success of an advertisement lies mostly in the headline.</p>
              <div className='item_secondary'>
                <span className='secondary_photos'>Foto <o>10293</o></span>
              </div>
            </div>
            <div className='webcams_item'>
              <div className='item_photo'>
                <img src='https://picsum.photos/200' />
              </div>
              <a href='/temu'>
                <h1 className='item_title'>Temù</h1>
              </a>
              <p>There is no denying the fact that the success of an advertisement lies mostly in the headline.</p>
              <div className='item_secondary'>
                <span className='secondary_photos'>Foto <o>10293</o></span>
              </div>
            </div>
          </div>
        </div>
        <Footer
          social={author}
        />
      </div>
    );
  }
}

export default Webcam

export const pageQuery = graphql`
query WebcamQuery {
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
