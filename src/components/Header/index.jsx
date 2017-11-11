import React from 'react'
import Link from 'gatsby-link'
import Topbar from '../Topbar'
import { translate } from 'react-i18next'
import './style.scss'

const Header = (props) => {
  const { t } = props
  return (
    <header className='main_header'>
      <Topbar social={props.social} menu={props.menu} />
      <div className='header'>
        <div className='header_logo'>
          <span className='logo_earth' />
        </div>
        <nav className='header_menu'>
          {props.menu.map((item, i) => <Link key={i} activeClassName={'active'} to={item.path}>{item.label}</Link>)}
        </nav>
      </div>
    </header>
  )
}

export default translate('translations')(Header)
