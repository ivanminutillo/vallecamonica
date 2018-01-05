import React, {Component} from 'react'
import './style.scss'
import {Twitter, Github, Calendar, Menu} from '../../icons'
import Link from 'gatsby-link'
import LanguageSwitcher from '../LanguageSwitcher'
import { translate, Trans } from 'react-i18next'
import LanguageMobile from '../LanguageSwitcher/mobile'

class Topbar extends Component {
  constructor () {
    super()
    this.toggleDropdown = this.toggleDropdown.bind(this)
    this.state = {
      isActive: false
    }
  }
  toggleDropdown () {
    this.setState({
      isActive: !this.state.isActive
    })
  }
  render () {
    const { t, menu} = this.props
    const {isActive} = this.state
    return (
        <section className='topbar'>
            <div className={isActive ? 'mobile_content active' : 'mobile_content'}>
                <nav className='content_menu'>
                    {menu.map((item, i) => <Link key={i} activeClassName={'active'} to={item.path}>{item.label}</Link>)}
                </nav>
            </div>
            <div className='menu_mobile'>
                <span className='topbar_menu' onClick={() => this.toggleDropdown()}><Menu color='white' width='20' height='20' line='1' /></span>
                
            </div>
            {/* <div className='topbar_calendar'>
                <span><Calendar color='white' width='18' height='18' line='1' /></span>
                <h5>25.09 - Global Assembly Minute @ 19.00 CET</h5>
                <button>Join Assembly</button>
            </div> */}
            <Link to={'/'}><div className='topbar_logo' /></Link>
            <div className='topbar_meta'>
                <div className='meta_social'>
                    <i className='social'>
                        <a href="https://twitter.com/Fair_Coop">
                            <Twitter color='white' width='16' height='16' />
                        </a>
                    </i>
                    <i className='social'>
                        <a href="https://github.com/faircoop">
                            <Github color='white' width='16' height='16' />
                        </a>
                        </i>
                    {/* <i className='social'><Twitter color='white' width='16' height='16' /></i> */}
                </div>
            </div>
        </section>
    )
  }
}

export default Topbar
