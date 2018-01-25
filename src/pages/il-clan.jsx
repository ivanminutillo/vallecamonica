import React from 'react'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'
import Intro from '../components/Intro'
import Slider from 'react-slick'
import BigImage from '../components/BigImage'
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share'

const settings = {
  dots: false,
  autoplay: true,
  autoplaySpeed: 5000,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}

const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  MailruShareButton,
} = ShareButtons

const {
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  PinterestShareCount,
  VKShareCount,
  OKShareCount,
  RedditShareCount,
  TumblrShareCount,
} = ShareCounts

const FacebookIcon = generateShareIcon('facebook')
const TwitterIcon = generateShareIcon('twitter')
const GooglePlusIcon = generateShareIcon('google')
const TelegramIcon = generateShareIcon('telegram')
const WhatsappIcon = generateShareIcon('whatsapp')

class IlClan extends React.Component {
  componentDidMount () {
    // axios.get('../images')
    // .then(res => console.log(res))
    // .catch(err => console.log(err))
  }

  render () {
     const shareUrl = 'http://vallecamonica.com'
     const socialTitle = 'Vallecamonica'
     const { title, menu, author } = this.props.data.site.siteMetadata
    return (
      <div>
        <Helmet>
          <title>Webcam Il Clan</title>
          <meta name='description' />
        </Helmet>
        <Intro little menu={menu} />
        <section className='section nodes bigImage'>
          <div className='section_wrapper'>
            <div className='wrapper_tagline'>
              <h5 className='bold'>Il Clan</h5>
            </div>
            <div className='body_webcam'>
              <div className='webcam_snap'>
                <div className='snap_photo'>
                <Slider {...settings}>
                  <div><h3>1</h3></div>
                  <div><h3>2</h3></div>
                  <div><h3>3</h3></div>
                  <div><h3>4</h3></div>
                  <div><h3>5</h3></div>
                  <div><h3>6</h3></div>
                </Slider>
                </div>
              </div>
              <div className='social_container'>
                <div className='container_item'>
                  <FacebookShareButton
                    url={shareUrl}
                    quote={socialTitle}
                    className='item_button'>
                    <FacebookIcon
                      size={32}
                      round />
                  </FacebookShareButton>
                </div>

                <div className='container_item'>
                  <TwitterShareButton
                    url={shareUrl}
                    title={socialTitle}
                    className='item_button'>
                    <TwitterIcon
                      size={32}
                      round />
                  </TwitterShareButton>
                </div>

                <div className='container_item'>
                  <TelegramShareButton
                    url={shareUrl}
                    title={socialTitle}
                    className='item_button'>
                    <TelegramIcon size={32} round />
                  </TelegramShareButton>
                </div>

                <div className='container_item'>
                  <WhatsappShareButton
                    url={shareUrl}
                    title={socialTitle}
                    separator=':: '
                    className='item_button'>
                    <WhatsappIcon size={32} round />
                  </WhatsappShareButton>
                </div>

                <div className='container_item'>
                  <GooglePlusShareButton
                    url={shareUrl}
                    className='item_button'>
                    <GooglePlusIcon
                      size={32}
                      round />
                  </GooglePlusShareButton>
                </div>
              </div>
              <p className='webcam_desc'>Collaborate seamlessly on documents! This pad text is synchronized as you type, so that everyone viewing this page sees the same text. 
Create your own board and a (secret) name for it here: http://board.net This service is provided on fair-use with open source technology by fairkom. 
Consider a donation in Euro or FairCoin https://www.fairkom.eu/en/sponsoring#Donations for disk space and new features. Virtual hug guaranteed! </p>
            </div>
          </div>
        </section>
        <BigImage title={'Dove si trova'} />
        <Footer
        />
      </div>
    );
  }
}

export default IlClan

export const pageQuery = graphql`
query IlClanQuery {
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
