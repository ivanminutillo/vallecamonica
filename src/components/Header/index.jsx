import React from 'react'
import Link from 'gatsby-link'
import './style.scss'
import {Twitter, Github, Calendar, Menu} from '../../icons'

// import {
//   Link
// } from 'react-router-dom'

class Header extends React.Component {
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
    const {isActive} = this.state
    return (
      <header className='main_header'>
        <div className={isActive ? 'mobile_content active' : 'mobile_content'}>
            <nav className='content_menu'>
                {this.props.menu.map((item, i) => <Link key={i} activeClassName={'active'} to={item.path}>{item.label}</Link>)}
            </nav>
        </div>
        <div className='menu_mobile'>
            <span className='topbar_menu' onClick={() => this.toggleDropdown()}><Menu color='white' width='20' height='20' line='1' /></span>
            
        </div>
        <div className='header'>
          <div className='header_logo'>
            <Link to={'/'}>
              <span className='logo_earth' />
            </Link>
          </div>
          <nav className='header_menu'>
            {this.props.menu.map((item, i) => <Link key={i} activeClassName={'active'} to={item.path}>{item.label}</Link>)}
            <a target='blank' href='http://blog.fair.coop'>Blog</a>
            {/* <a href='http://wiki.fair.coop'>Wiki</a> */}
          </nav>
        </div>
      </header>
    )
  }
}

export default Header
