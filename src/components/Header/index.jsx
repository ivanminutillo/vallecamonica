import React from 'react'
import Link from 'gatsby-link'
import Topbar from '../Topbar'
import './style.scss'

export default function Header () {
  return (
    <header className='main_header'>
      <Topbar />
      <div className='header'>
        <div className='header_logo'>
          <span className='logo_earth' />
        </div>
        <nav className='header_menu'>
          <Link activeClassName={'active'} to={'/'}>Home</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/organization'}>Organization</Link>
          <Link to={'/economic-system'}>economic system</Link>
          <Link to={'/network'}>Network</Link>
          <Link to={'/tools'}>tools</Link>
          <Link to={'/wiki'}>wiki</Link>
          <Link to={'/forum'}>forum</Link>
          <Link to={'/blog'}>blog</Link>
          <Link to={'/join-us'}>join us</Link>
        </nav>
      </div>
    </header>
  )
}

