import React from 'react'
import './style.scss'

const Intro = ({image, title}) => (
  <div className={'page_header ' + image}>
    <h1 className='page_title'>{title}</h1>
  </div>
)

export default Intro
