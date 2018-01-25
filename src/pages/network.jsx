import React from 'react'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'
import Intro from '../components/Intro'


class Network extends React.Component {
  render () {
    const { title, menu, author } = this.props.data.site.siteMetadata
    return (
      <div>
        <Helmet>
          <title>{`${title}`}</title>
          <meta name="description" />
        </Helmet>
        <Intro menu={menu} image={'about'} title={'Il Network'} />
        <div className='page_body'>
          <div className='content_network'>
            <div className='network_list'>
                <h5 className='list_title'>Collaboratori</h5>
                <div className='list_item'>
                    <div className='item_photo bepete' />
                    <div className='item_meta'>
                        <h2 className='item_title'>Bepete</h2>
                        <div className='meta_link'> <a href='#'>Sito Web</a> | <a href='#'>Facebook</a> | <a href='#'>Twitter</a> </div>
                        <ul className='item_hash'>
                            <li>#boh1</li> <li>#boh2</li> <li>#boh3</li>
                        </ul>
                    </div>
                </div>
                <div className='list_item'>
                    <div className='item_photo adamello' />
                    <div className='item_meta'>
                        <h2 className='item_title'>Adamello Magazine</h2>
                        <div className='meta_link'> <a href='#'>Sito Web</a> | <a href='#'>Facebook</a> | <a href='#'>Twitter</a> </div>
                        <ul className='item_hash'>
                            <li>#boh1</li> <li>#boh2</li> <li>#boh3</li>
                        </ul>
                    </div>
                </div>
                <div className='list_item'>
                    <div className='item_photo allianz' />
                    <div className='item_meta'>
                        <h2 className='item_title'>Allianz Nord Brescia</h2>
                        <div className='meta_link'> <a href='#'>Sito Web</a> | <a href='#'>Facebook</a> | <a href='#'>Twitter</a> </div>
                        <ul className='item_hash'>
                            <li>#boh1</li> <li>#boh2</li> <li>#boh3</li>
                        </ul>
                    </div>
                </div>
                <div className='list_item'>
                    <div className='item_photo bmsmoto' />
                    <div className='item_meta'>
                        <h2 className='item_title'>BMS Moto</h2>
                        <div className='meta_link'> <a href='#'>Sito Web</a> | <a href='#'>Facebook</a> | <a href='#'>Twitter</a> </div>
                        <ul className='item_hash'>
                            <li>#boh1</li> <li>#boh2</li> <li>#boh3</li>
                        </ul>
                    </div>
                </div>
                <div className='list_item'>
                    <div className='item_photo clan' />
                    <div className='item_meta'>
                        <h2 className='item_title'>Clan</h2>
                        <div className='meta_link'> <a href='#'>Sito Web</a> | <a href='#'>Facebook</a> | <a href='#'>Twitter</a> </div>
                        <ul className='item_hash'>
                            <li>#boh1</li> <li>#boh2</li> <li>#boh3</li>
                        </ul>
                    </div>
                </div>
                <div className='list_item'>
                    <div className='item_photo dimensionesport' />
                    <div className='item_meta'>
                        <h2 className='item_title'>Dimensione Sport Piancogno</h2>
                        <div className='meta_link'> <a href='#'>Sito Web</a> | <a href='#'>Facebook</a> | <a href='#'>Twitter</a> </div>
                        <ul className='item_hash'>
                            <li>#boh1</li> <li>#boh2</li> <li>#boh3</li>
                        </ul>
                    </div>
                </div>
                <div className='list_item'>
                    <div className='item_photo italiana-assicurazioni-brescia' />
                    <div className='item_meta'>
                        <h2 className='item_title'>Italiana Assicurazioni Brescia</h2>
                        <div className='meta_link'> <a href='#'>Sito Web</a> | <a href='#'>Facebook</a> | <a href='#'>Twitter</a> </div>
                        <ul className='item_hash'>
                            <li>#boh1</li> <li>#boh2</li> <li>#boh3</li>
                        </ul>
                    </div>
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

export default Network

export const pageQuery = graphql`
query NetworkQuery {
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
