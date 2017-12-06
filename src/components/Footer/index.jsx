import React from 'react'
import './style.scss'
import Horizontal from '../LanguageSwitcher/horizontal'
const Footer = () => {
    return (
        <section className='footer'>
            <div className='footer_wrapper'>
                <h5 className='footer_desc'>Made with ❤️ on the decentralized earth</h5>
                <div className='footer_logo'/>
                <Horizontal />
                <div className='footer_social'></div>
            </div>
        </section>
    )
}

export default Footer
