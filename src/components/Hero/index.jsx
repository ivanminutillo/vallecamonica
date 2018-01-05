import React from 'react'
import './style.scss'
import Link from 'gatsby-link'
import {Book} from '../../icons'
import Header from '../Header'
const Hero = (props) => {
  // console.log('hero')
  // console.log(props)
  return (
    <section className='hero'>
      <Header menu={props.menu} />
      <div className='hero_wrapper'>
        <h4>osserva</h4>
        <h3 className='hero_tagline'>La bellezza<br />della Valle Camonica<br /> <i>da ogni angolo</i></h3>
        <div className='hero_meta'>
          <div className='meta_desc'>
          <p>Lorem ipsum Now, if you are interested in being the best player, getting really good money and knowing some tricks and advices of what to do.</p>
            <Link to='/about'>Scopri di più</Link>
            <a className='inline' href='#'>Guarda le webcam</a>
            {/* <Link className='inline' to='/about'></Link> */}
          </div>
        </div>
      </div>
        {/* <div className='hero_feed'>
          <div className='feed_document'>
            <span><Book heigth='18' width='18' line='1' /></span>
            <h5>Faircoop Beginner guide </h5>
          <div className='feed_actions'>
            <a className='inline' href='https://git.fairkom.net/faircoop/MediaCommunication/wikis/welcome-to-faircoop' target='blank'>Read online</a>
          </div>
          </div>
        </div> */}
    </section>
  )
}

export default Hero
