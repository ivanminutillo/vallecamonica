import React from 'react'
import './style.scss'

const Faircoin = () => {
    return (
        <section className='faircoin_section'>
            <div className='section_wrapper'>
                <div className='wrapper'>
                    <div className='wrapper_desc'>
                        <h1>We use <br /> <b>faircoins</b></h1>
                        <h3>And a bunch of others alternative currencies</h3>
                        <h5>FairCoin is an ethical digital currency, driven by the values of the FairCoop ecosystem and supported by a fast-growing global cooperative movement. It is decentralized, as any other cryptocurency, but at the same time implements radical innovations that makes it unique in terms of ecological operation, stable value growth, ethical trade, savings and funding opportunities. Its development continues in order to base a fair economic system, for the 99% of the world, upon that. Read more https://fair-coin.org/</h5>
                        <br />
                        <h1>to build a <br /> <b>Circular Economy</b></h1>
                        <h5>We are building a real and productive economy around FairCoin, trying to create a circular use of products and services either at local and global level. More and more merchants, shops and producers worldwide trust FairCoin as a mean of exchange, taking advantage of its stable value and the various open and free tools build to support it.                        </h5>
                        <div className='faircoin_actions'>
                            <button className='good'>Download Wallet</button>
                            <button className='inline'><a href='https://use.fair-coin.org/'>Get some faircoins</a></button>
                            <button className='inline'><a href='https://market.fair.coop'>Spend Faircoins</a></button>
                        </div>
                    </div>
                    {/* <div className='faircoin_data'>
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
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Faircoin
