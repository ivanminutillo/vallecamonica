import React from 'react'
import Link from 'gatsby-link'
import Topbar from '../Topbar'
import './style.scss'

const Header = ({menu, social}) => {
  return (
    <header className='main_header'>
      <Topbar social={social} menu={menu} />
      <div className='header'>
        <div className='header_logo'>
          <span className='logo_earth' />
        </div>
        <nav className='header_menu'>
          {menu.map((item, i) => <Link key={i} activeClassName={'active'} to={item.path}>{item.label}</Link>)}
        </nav>
      </div>
    </header>
  )
}

export default Header
