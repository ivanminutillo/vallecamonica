import React from 'react'
import './style.scss'
import Link from 'gatsby-link'
import {Book} from '../../icons'
import { translate } from 'react-i18next'

const Hero = (props) => {
  const {t} = props
  return (
    <section className='hero'>
      <div className='hero_wrapper'>
        <h4>{t('hero.description')}</h4>
        <h3 className='hero_tagline'>{t('hero.title.first_line')}<br />{t('hero.title.second_line')}<br /> <i>{t('hero.title.third_line_italic')}</i> {t('hero.title.third_line')}</h3>
        <div className='hero_meta'>
          <div className='meta_desc'>
            <Link to='/about'>{t('hero.readMore')}</Link>
            <a className='inline' href='http://discourse.fair.coop'>{t('hero.joinDiscussion')}</a>
            {/* <Link className='inline' to='/about'></Link> */}
          </div>
        </div>
      </div>
        <div className='hero_feed'>
          <div className='feed_document'>
            <span><Book heigth='18' width='18' line='1' /></span>
            <h5>Faircoop Beginner guide </h5>
          <div className='feed_actions'>
            {/* <button className='good'>Download</button> */}
            <button className='inline'>Read online</button>
          </div>
          </div>
        </div>
    </section>
  )
}

export default translate('translations')(Hero)
