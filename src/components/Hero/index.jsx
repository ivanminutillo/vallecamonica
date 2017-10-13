import React from 'react'
import './style.scss'
import Link from 'gatsby-link'

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero_wrapper'>
        {/* <h1 className='hero_title'>Fair<i>Coop</i></h1> */}
        <h3 className='hero_tagline'>The Earth <br />Cooperative Ecosystem <br /> <i>for</i> a fair economy</h3>
        <div className='hero_meta'>
          <div className='meta_desc'>
            <h4>Revolutionizing the life of the 99% by self-empowerment and decentralization.</h4>
            <Link to='/about'>Read more</Link>
            <Link className='inline' to='/about'>Join discussion</Link>
          </div>
        </div>
      </div>
      {/* <div className='hero_data'>
        <div className='data_wrapper'>
          <div className='data'>
            <h3>120</h3>
            <h5>Local Nodes</h5>
          </div>
          <div className='data'>
            <h3>17</h3>
            <h5>Active Projects</h5>
          </div>
          <div className='data'>
            <h3>23</h3>
            <h5>Monthly Assemblies</h5>
          </div>
        </div>
        </div> */}
        <div className='hero_feed'>
          <div className='feed_document'>
            <h5>Beginner Starting guide</h5>
          <div className='feed_actions'>
            <button className='good'>Download</button>
            <button className='inline'>Read online</button>
          </div>
          </div>
        </div>
        <div className='hero_feed'>
          <div className='feed_document'>
            <h5>25.09 - Global Assembly Minute</h5>
          <div className='feed_actions'>
            <button className='good'>Download</button>
            <button className='inline'>Read online</button>
          </div>
          </div>
        </div>
    </section>
  )
}

export default Hero
