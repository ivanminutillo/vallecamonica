import React from 'react'
import './style.scss'
import Markdown from 'react-remarkable'
import { translate } from 'react-i18next'

const Faircoin = (props) => {
  const {t} = props
  return (
    <section className='faircoin_section'>
      <div className='section_wrapper'>
        <div className='wrapper'>
          <div className='wrapper_desc'>
            <h1>{t('economy.faircoin.title')} <br /> <b>{t('economy.faircoin.bold')}</b></h1>
            {/* <h3>{t('economy.faircoin.tagline')}</h3> */}
            <h5><Markdown source={t('economy.faircoin.description')} /></h5>
            <br />
            <h1>{t('economy.circularEconomy.title')} <br /> <b>{t('economy.circularEconomy.bold')}</b></h1>
            <h5>{t('economy.circularEconomy.description')}</h5>
            <div className='faircoin_actions'>
              <a className='good' target='blank' href='https://market.fair.coop'>{t('economy.action.one')}</a>
              <a className='inline' target='blank' href='https://use.fair-coin.org/'>{t('economy.action.two')}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default translate('translations')(Faircoin)
