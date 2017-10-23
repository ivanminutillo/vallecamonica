import React from 'react'
import './style.scss'
import {Twitter, Github, Calendar, Menu} from '../../icons'

const Topbar = ({social}) => {
    return (
        <section className='topbar'>
            <span className='topbar_menu'><Menu color='white' width='20' height='20' line='1' /></span>
            <div className='topbar_calendar'>
                <span><Calendar color='white' width='18' height='18' line='1' /></span>
                <h5>25.09 - Global Assembly Minute @ 19.00 CET</h5>
                <button>Join Assembly</button>
            </div>
            <div className='topbar_logo' />
            <div className='topbar_meta'>
                <div className='meta_languages'>
                    <div className='languages_container'>
                        English
                    </div>
                </div>
                <div className='meta_social'>
                    <i className='social'><Twitter color='white' width='16' height='16' /></i>
                    <i className='social'><Github color='white' width='16' height='16' /></i>
                    <i className='social'><Twitter color='white' width='16' height='16' /></i>
                </div>
            </div>
        </section>
    )
}

export default Topbar
