import React, {Component} from 'react'
import './style.scss'
import {Integral, Disobedience, Cooperativism, Decentralization, Stateless} from './topic'

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
    let topic
    if (isSelected === 'integral') { topic = <Integral /> }
    else if (isSelected === 'disobedience') { topic = <Disobedience /> }
    else if (isSelected === 'cooperativism') { topic = <Cooperativism /> }
    else if (isSelected === 'decentralization') { topic = <Decentralization /> }
    else if (isSelected === 'stateless') { topic = <Stateless /> }
    return (
      <section className='section tabs'>
        <div className='section_wrapper'>
          <div className='wrapper_tagline'><h5 className='bold'># Our principles</h5></div>
            <div className='tabs_content'>
              <div className='container_menu'>
                <h2 onClick={() => this.selectTab('integral')} className={isSelected === 'integral' ? 'active' : ''}>Integral Revolution</h2>
                <h2 onClick={() => this.selectTab('disobedience')} className={isSelected === 'disobedience' ? 'active' : ''}>Disobedience</h2>
                <h2 onClick={() => this.selectTab('cooperativism')} className={isSelected === 'cooperativism' ? 'active' : ''}>Open Cooperativism</h2>
                <h2 onClick={() => this.selectTab('decentralization')} className={isSelected === 'decentralization' ? 'active' : ''}>Decentralization</h2>
                <h2 onClick={() => this.selectTab('stateless')} className={isSelected === 'stateless' ? 'active' : ''}>Stateless Democracy</h2>
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

export default Tabs
