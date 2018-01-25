import React from 'react'
import './style.scss'
import Header from '../Header'

const Intro = ({image, title, little, menu}) => (
  <div className={little ? 'page_header little' : 'page_header ' + image}>
    <Header menu={menu} />
    <h1 className='page_title'>{title}</h1>
  </div>
)

export default Intro
