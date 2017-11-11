import React from 'react'
import './style.scss'

const Methodology = () => {
    return (
    <section className='section methodology'>
        <div className='section_wrapper'>
            <div className='wrapper_tagline'><h5>A dive into our methodology</h5></div>
            <div className='wrapper_info'>
                <div className='info_content'>
                    <h1># Open assemblies & consensus</h1>
                    <div>In open assemblies, the community decides about the framework of the ecosystem and the agendas to reach our common goals. Everybody can participate and make proposals for certain developments, changes, or projects to work on. When a proposal passes via consensus the respective proposal maker and its working groups will take action. This method we use for the global online meetings as well as for the physical Local nodes meetings.</div>
                    <button>Read in detail</button>
                    <h1># Self-organization & Value Distribution</h1>
                    <div>The FairCoop community organizes itself through open cooperativism. Everybody is encouraged to participate with their individual skills and ideas, and take proactive responsiblities, and thus help the movement grow. <br />Based on our collaborative working tool (link to OCP) participants can either volunteer their hours or claim a remuneration in Faircoin for the tasks needed. This way we give the opportunity to reward those who are bringing real value with their work into FairCoop.</div>
                    <button>How to contribute</button>
                </div>
                <div className='wrapper_image'>
                  <div className='wrapper_diagram' />
                </div>
            </div>
        </div>
    </section>
    )
}

export default Methodology
