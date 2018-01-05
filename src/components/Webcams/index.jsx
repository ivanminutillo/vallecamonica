import React from 'react'
import './style.scss'
import {Book} from '../../icons'

const Nodes = (props) => {
  return (
    <section className='section nodes webcams'>
      <div className='section_wrapper'>
        <div className='wrapper_tagline'><h5 className='bold'>Le nostre webcams</h5></div>
        <div className='wrapper_info'>
          <div className='info_content'>
            <div>Having used discount toner cartridges for twenty years, there have been a lot of changes in the toner cartridge market. The market today is approximately a twenty billion dollar business. </div>
            {/* <a className='good' href='http://map.fairplayground.info/map-localnodes/' target='blank'>{t('localNodes.action')}</a> */}
            <a className='content_link good'>Tutte le webcams</a>
          </div>
          <div className='content_webcams'>
            <div className='webcams_item'>
              <div className='item_photo' />
              <h1 className='item_title'>Rifugio Cannavacciuolo</h1>
              <p>There is no denying the fact that the success of an advertisement lies mostly in the headline.</p>
              <div className='item_secondary'>
                <span className='secondary_photos'>Foto <o>10293</o></span>
              </div>
            </div>
            <div className='webcams_item'>
              <div className='item_photo' />
              <h1 className='item_title'>Rifugio Cannavacciuolo</h1>
              <p>There is no denying the fact that the success of an advertisement lies mostly in the headline.</p>
              <div className='item_secondary'>
                <span className='secondary_photos'>Foto <o>10293</o></span>
              </div>
            </div>
            <div className='webcams_item'>
              <div className='item_photo' />
              <h1 className='item_title'>Rifugio Cannavacciuolo</h1>
              <p>There is no denying the fact that the success of an advertisement lies mostly in the headline.</p>
              <div className='item_secondary'>
                <span className='secondary_photos'>Foto <o>10293</o></span>
              </div>
            </div>
            <div className='webcams_item'>
              <div className='item_photo' />
              <h1 className='item_title'>Rifugio Cannavacciuolo</h1>
              <p>There is no denying the fact that the success of an advertisement lies mostly in the headline.</p>
              <div className='item_secondary'>
                <span className='secondary_photos'>Foto <o>10293</o></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Nodes
