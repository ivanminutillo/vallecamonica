import React from 'react'
import './style.scss'
import {Message, Heart} from '../../icons'
import axios from 'axios'

class Instagram extends React.Component {
  constructor () {
    super()
    this.state = {
      photo: []
    }
  }
  componentDidMount () {
    axios.get('https://api.instagram.com/v1/users/2915752616/media/recent?access_token=2915752616.ee75120.a943aa2859844b438e761270dc3920a2')
    .then(res => {
      return this.setState({photo: res.data.data})
    })
  }
  render () {
    const {photo} = this.state
    return (
      <section className='section nodes instagram'>
        <div className='section_wrapper'>
          <div className='wrapper_tagline'><h5 className='bold'><i>Le ultime foto</i> della valle</h5></div>
          <div className='wrapper_info'>
            <div className='info_content'><a href='https://www.instagram.com/webcamvallecamonica/' target='blank' className='content_link good instagram'><span className='instagram_icon' /> @vallecamonica</a></div>
            <div className='content_photo'>
              {photo.map((photo, i) => (
                <div key={i} className='photo_item'>
                  <a href={photo.link} target='blank'>
                    <div className='item_photo' style={{backgroundImage: `url(${photo.images.standard_resolution.url})`}} />
                    <div className='item_meta'>
                      <div className='meta_likes'><span className='meta_image'><Heart width={'18'} height={'18'} color={'#dadada'} /></span> {photo.likes.count}</div>
                      <div className='meta_comments'><span className='meta_image'><Message width={'18'} height={'18'} color={'#dadada'} /></span> {photo.comments.count}</div>
                    </div>
                    <h5>{photo.caption.text}</h5>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <h2 className='instagram_link'>Continua su <a target='blank' href='https://www.instagram.com/webcamvallecamonica/'>Instagram</a></h2>
        </div>
      </section>
    )
  }
}

export default Instagram
