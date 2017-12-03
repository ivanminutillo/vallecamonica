import React from 'react'
import Link from 'gatsby-link'
import Topbar from '../Topbar'
import { translate } from 'react-i18next'
import './style.scss'
// import {
//   Link
// } from 'react-router-dom'

const Header = (props) => {
  const { t } = props
  return (
    <header className='main_header'>
      <Topbar social={props.social} menu={props.menu} />
      <div className='header'>
        <div className='header_logo'>
          <Link to={'/'}>
            <span className='logo_earth' />
          </Link>
        </div>
        <nav className='header_menu'>
          {props.menu.map((item, i) => <Link key={i} activeClassName={'active'} to={item.path}>{item.label}</Link>)}
          <a target='blank' href='http://blog.fair.coop'>Blog</a>
          <a target='blank' href='http://discourse.fair.coop'>Forum</a>
          {/* <a href='http://wiki.fair.coop'>Wiki</a> */}
        </nav>
      </div>
    </header>
  )
}

export default translate('translations')(Header)
