import React from 'react'
import './style.scss'

const Tabs = () => {
    return (
        <section className='tabs'>
          <div className='tabs_container'>
            <h1>Just a bit more about us</h1>
            <div className='tabs_separate'>~</div>
            <div className='tabs_content'>
                <div className='container_menu'>
                    <h2>#Integral Revolution</h2>
                    <h2>#Disobedience</h2>
                    <h2>#Cooperativism</h2>
                    <h2>#Decentralization</h2>
                </div>
                <div className='container_text'>
                    <h4>Integral Revolution</h4>
                    <div>
                    There is a moment in the life of any aspiring astronomer that it is time to buy that first telescope. It’s exciting to think about setting up your own viewing station whether that is on the deck of your home or having a powerful but mobile telescope set up to take to the remove countryside to really get a good shot at some breath taking star gazing.
The last thing we would want to do is to take away any of the “fun” of your hobby of astronomy.
                    </div>
                    <button>Visit the website</button>
                </div>
            </div>
          </div>
        </section>
    )
}

export default Tabs
