import React from 'react'
import {Twitter, Facebook, Instagram, Calendar, Menu} from '../../icons'
import './style.scss'
const Footer = () => {
    return (
        <section className='footer'>
            <div className='footer_wrapper'>
                <div className='footer_logo'/>
                <h5 className='footer_desc'>All right © vallecamonica.com</h5>
                <div className='header_social'>
                        <span><Twitter color={'#333'} width='18' height='18' /></span>
                        <span><Facebook color={'#333'} width='18' height='18' /></span>
                        <span><Instagram color={'#333'} width='18' height='18' /></span>
                    </div>
            </div>
        </section>
    )
}

export default Footer
