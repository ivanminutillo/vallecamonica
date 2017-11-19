import React from 'react'
import './style.scss'
import { translate } from 'react-i18next'

const Methodology = (props) => {
  const {t} = props
  return (
    <section className='section methodology'>
      <div className='section_wrapper'>
        <div className='wrapper_tagline'><h5>{t('methodology.assembly.suptitle')}</h5></div>
        <div className='wrapper_info'>
          <div className='info_content'>
            <h1>{t('methodology.assembly.title')}</h1>
            <div>{t('methodology.assembly.description')}</div>
            <button>{t('methodology.assembly.action')}</button>
            <h1>{t('methodology.autonomy.title')}</h1>
            <div>{t('methodology.autonomy.description')}</div>
            <button>{t('methodology.autonomy.action')}</button>
          </div>
          <div className='wrapper_image'>
            <div className='wrapper_diagram' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default translate('translations')(Methodology)
