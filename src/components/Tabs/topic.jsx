import React from 'react'
import { translate } from 'react-i18next'

const Integral = (props) => {
  const {t} = props
  return (
    <div>
      <div>{t('tabs.integralRevolutionText')}</div>
    </div>
  )
}


export const Disobedience = (props) => {
  const {t} = props
  return (
    <div>
      <div>{t('tabs.disobedienceText')}</div>
    </div>
  )
}

export const Cooperativism = (props) => {
  const {t} = props
  return (
    <div>
      <div>{t('tabs.openCooperativismText')}</div>
    </div>
  )
}

export const Decentralization = (props) => {
  const {t} = props
  return (
    <div>
      <div>{t('tabs.decentralizationText')}</div>
    </div>
  )
}

export const Stateless = (props) => {
  const {t} = props
  return (
    <div>
      <div>{t('tabs.statelessDemocracyText')}</div>
    </div>
  )
}

module.exports = {
    Integral: translate('translations')(Integral),
    Disobedience:translate('translations')(Disobedience),
    Cooperativism: translate('translations')(Cooperativism),
    Decentralization: translate('translations')(Decentralization),
    Stateless: translate('translations')(Stateless)
}
