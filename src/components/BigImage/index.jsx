import React from 'react'
import './style.scss'

const BigImage = () => {
    return (
        <section className='bigImage'>
          <h1>We decide <b>together</b></h1>
            <div className='bigImage_wrapper'>
                <div className='wrapper_overlay' />
                <div className='wrapper_info'>
                    <div className='bigimage_desc'>In open assemblies, the community decides about the framework of the ecosystem and the agendas to reach our common goals. Everybody can make a proposal for certain developments, changes, or projects to work on. When a proposal passes via consensus the respective proposal maker and its working groups will take action.</div>
                    <div className='bigImage_meta'>
                        <h2>Open Assemblies & Consensus - period</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BigImage
