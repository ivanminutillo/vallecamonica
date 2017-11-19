import React, {Component} from 'react'
import './style.scss'
import {Integral, Disobedience, Cooperativism, Decentralization, Stateless} from './topic'
import { translate } from 'react-i18next'

class Tabs extends Component {
  constructor () {
    super()
    this.selectTab = this.selectTab.bind(this)
    this.state = {
      isSelected: 'integral'
    }
  }

  selectTab (topic) {
    this.setState({
      isSelected: topic
    })
  }

  render () {
    const {isSelected} = this.state
    const {t} = this.props
    let topic
    if (isSelected === 'integral') { topic = <Integral /> }
    else if (isSelected === 'disobedience') { topic = <Disobedience /> }
    else if (isSelected === 'cooperativism') { topic = <Cooperativism /> }
    else if (isSelected === 'decentralization') { topic = <Decentralization /> }
    else if (isSelected === 'stateless') { topic = <Stateless /> }
    return (
      <section className='section tabs'>
        <div className='section_wrapper'>
          <div className='wrapper_tagline'><h5 className='bold'>{t('tabs.title')}</h5></div>
            <div className='tabs_content'>
              <div className='container_menu'>
                <h2 onClick={() => this.selectTab('integral')} className={isSelected === 'integral' ? 'active' : ''}>{t('tabs.integralRevolution')}</h2>
                <h2 onClick={() => this.selectTab('disobedience')} className={isSelected === 'disobedience' ? 'active' : ''}>{t('tabs.disobedience')}</h2>
                <h2 onClick={() => this.selectTab('cooperativism')} className={isSelected === 'cooperativism' ? 'active' : ''}>{t('tabs.openCooperativism')}</h2>
                <h2 onClick={() => this.selectTab('decentralization')} className={isSelected === 'decentralization' ? 'active' : ''}>{t('tabs.decentralization')}</h2>
                <h2 onClick={() => this.selectTab('stateless')} className={isSelected === 'stateless' ? 'active' : ''}>{t('tabs.statelessDemocracy')}</h2>
              </div>
              <div className='container_text'>
                {topic}
              </div>
            </div>
        </div>
      </section>
    )
  }
}

export default translate('translations')(Tabs)
