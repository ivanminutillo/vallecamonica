import React from 'react'
import './style.scss'
import {Book} from '../../icons'

const Nodes = () => {
    return (
    <section className='section nodes'>
        <div className='section_wrapper'>
            <div className='wrapper_tagline'><h5>We strive for self-governance and autonomy</h5></div>
            <div className='wrapper_info'>
                <div className='info_content'>
                    <h1># Local Nodes, Faircoop self governance</h1>
                    <div>Now, if you are interested in being the best player, getting really good money and knowing some tricks and advices of what to do in a live tournament games, here is the best place to learn them.</div>
                    <button>Find a local node near to you</button>
                    <button>Create a local node</button>
                        <div className='hero_feed'>
                            <div className='feed_document'>
                                <span><Book heigth='18' width='18' line='1' /></span>
                                <h5>How to create a local node </h5>
                                <div className='feed_actions'>
                                    <button className='good'>Download</button>
                                    <button className='inline'>Read online</button>
                                </div>
                            </div>
                        </div>

                </div>
            </div>
        </div>
    </section>
    )
}

export default Nodes
