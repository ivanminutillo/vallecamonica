import React from 'react'
import './style.scss'
import { translate } from 'react-i18next'

const BigImage = (props) => {
  const {t} = props
  return (
    <section className='bigImage'>
      <div className='bigImage_wrapper'>
        <div className='bigImage_info'>
          <h1>{t('bigImage.title')} <b>{t('bigImage.bold')}</b></h1>
        </div>
      </div>
    </section>
  )
}

export default translate('translations')(BigImage)
