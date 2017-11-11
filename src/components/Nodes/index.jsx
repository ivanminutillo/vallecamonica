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
                    <div>Apart from the global vision, various Local Nodes of FairCoop are established all around the world in order to bridge local initiatives, groups and people to the whole ecosystem. This is a bidirectional relation that supports and realizes FairCoop’s objectives in local communities while giving back important feedback. It is a mutual network build to expand our economic system at the global level, through building local trust and support real economic activity.</div>
                    <button><a href='http://map.fairplayground.info/'>Find a local node near to you</a></button>
                        <div className='hero_feed'>
                            <div className='feed_document'>
                                <span><Book heigth='18' width='18' line='1' /></span>
                                <h5>How to create a local node </h5>
                                <div className='feed_actions'>
                                    <button className='good'>Download</button>
                                    <button className='inline'><a href='https://fair.coop/docs/how-to-create-local-nodes/'>Read online</a></button>
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
