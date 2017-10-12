import React from 'react'
import './style.scss'

const Work = () => {
    return (
        <section className='work_section'>
            <div className='section_wrapper'>
                <div className='wrapper_image'>
                    <div className='wrapper_diagram_overlay' />
                    <div className='wrapper_diagram' />
                </div>
                <div className='wrapper_info'>
                    <h1>We <b>self-organize</b> <br />our work</h1>
                    <p>The FairCoop community organizes itself through open cooperativism. Everybody is encouraged to participate with their individual skills and ideas, and take proactive responsiblities, and thus help the movement grow. 
As we are working globally to support a decentralization and a local economy we have the approach to follow a glocal organization model. </p>
                </div>
            </div>
        </section>
    )
}

export default Work
