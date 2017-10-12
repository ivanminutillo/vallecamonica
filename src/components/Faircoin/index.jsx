import React from 'react'
import './style.scss'

const Faircoin = () => {
    return (
        <section className='faircoin_section'>
            <div className='section_wrapper'>
                <div className='wrapper_desc'>
                    <h1>We use <br /> <b>faircoins</b></h1>
                    <h3>And a bunch of others alternative currencies</h3>
                    <h5>We just love Faircoin for so many reasons. It is our global currency which has major advantages to other fiat and cryptocurrencies. It is resistant against inflation, the value grows with its community, its energy efficient and decentralized by nature. And the best, it creates cooperative win-win situation for all participants.</h5>
                    <div className='faircoin_actions'>
                        <button className='good'>Download Wallet</button>
                        <button className='inline'>Get some faircoins</button>
                    </div>
                </div>
                <div className='faircoin_data'>
                    <div className='data_item'>
                        <h1>120</h1>
                        <h5>Markets</h5>
                    </div>
                    <div className='data_item'>
                        <h1>45</h1>
                        <h5>Website</h5>
                    </div>
                    <div className='data_item'>
                        <h1>83.4K</h1>
                        <h5>Market Cap.</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faircoin
