import React from 'react'
import './style.scss'
import Link from 'gatsby-link'
import Slider from 'react-slick'

const Sponsor = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      className: 'sponsor_photo',
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: false,
            slidesToShow: 2,
            infinite: true,
            slidesToScroll: 1,
            swipeToSlide: true
          }
        }
      ]
    };
    return (
        <section className='sponsor'>
            <div className='sponsor_wrapper'>
                <h3>Gli sponsor <i>della valle</i></h3>
                <div className='wrapper_list'>
                <Slider {...settings}>
                <div><img src='https://i.imgur.com/81KPvS5.jpg' /></div>
                <div><img src='https://i.imgur.com/5HfVYWe.jpg' /></div>
                <div><img src='https://i.imgur.com/PMyeYfe.jpg' /></div>
                <div><img src='https://i.imgur.com/lhRzxal.jpg' /></div>
                <div><img src='https://i.imgur.com/Ap4wWdv.jpg' /></div>
                <div><img src='https://i.imgur.com/DI1Wh34.jpg' /></div>
                <div><img src='https://i.imgur.com/oHPxm6f.jpg' /></div>
                <div><img src='https://i.imgur.com/81KPvS5.jpg' /></div>
                <div><img src='https://i.imgur.com/5HfVYWe.jpg' /></div>
            </Slider>
                </div>
            </div>
        </section>
    )
}

export default Sponsor
