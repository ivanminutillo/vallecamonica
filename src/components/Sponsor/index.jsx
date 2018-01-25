import React from 'react'
import './style.scss'
import Link from 'gatsby-link'
import Slider from 'react-slick'

const Sponsor = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      className: 'sponsor_photo',
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: false,
            slidesToShow: 1,
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
                <div><a target='blank' href='www.adamellomagazine.it'><img src='https://i.imgur.com/81KPvS5.jpg' /></a></div>
                <div><a target='blank' href='www.bepetebam.it'><img src='https://i.imgur.com/5HfVYWe.jpg' /></a></div>
                <div><a target='blank' href='www.facebook.com/allianzbrescianord'><img src='https://i.imgur.com/PMyeYfe.jpg' /></a></div>
                <div><a target='blank' href='www.wuweituina.it'><img src='https://i.imgur.com/lhRzxal.jpg' /></a></div>
                <div><a target='blank' href='www.facebook.com/peakperformancepontedilegno'><img src='https://i.imgur.com/Ap4wWdv.jpg' /></a></div>
                <div><a target='blank' href='www.sportinmontagna.com'><img src='https://i.imgur.com/DI1Wh34.jpg' /></a></div>
                <div><a target='blank' href='https://www.instagram.com/webcamvallecamonica/'><img src='https://i.imgur.com/oHPxm6f.jpg' /></a></div>
            </Slider>
                </div>
            </div>
        </section>
    )
}

export default Sponsor
