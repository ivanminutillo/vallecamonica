import React from 'react'
import './style.scss'

const Topbar = () => {
    return (
        <section className='topbar'>
            <div className='topbar_calendar'>
                <h5>25.09 - Global Assembly Minute @ 19.00 CET</h5>
                <button>Join Assembly</button>
            </div>
            <div className='topbar_meta'>
                <div className='meta_languages'>
                    <div className='languages_container'>
                        English
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Topbar