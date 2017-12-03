import React from 'react'
import './style.scss'
import {Book} from '../../icons'
import { translate } from 'react-i18next'

const Nodes = (props) => {
  const {t} = props
  return (
    <section className='section nodes'>
      <div className='section_wrapper'>
        <div className='wrapper_tagline'><h5 className='bold'>{t('localNodes.title')}</h5></div>
        <div className='wrapper_info'>
          <div className='info_content'>
            <div>{t('localNodes.description')}</div>
            <a className='good' href='http://map.fairplayground.info/map-localnodes/' target='blank'>{t('localNodes.action')}</a>
            <div className='hero_feed'>
              <div className='feed_document'>
                <span><Book heigth='18' width='18' line='1' /></span>
                <h5>How to create a local node </h5>
                <div className='feed_actions'>
                  {/* <button className='good'>Download</button> */}
                  <a className='inline' target='blank' href='https://fair.coop/docs/how-to-create-local-nodes/'>Read online</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default translate('translations')(Nodes)
