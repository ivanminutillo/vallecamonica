import React from 'react'
import './style.scss'
import {Webcam} from '../../icons'
import GoogleMapReact from 'google-map-react'

const Pin = ({ text }) => <div className='pin'>
  <div className='pin_circle'><Webcam width='18' height='18' color='#000' /></div>
</div>

const AllPin = [
  <Pin lat={45.955497} lng={10.297552} text={'Castello di Breno'}/>,
  <Pin lat={46.238636} lng={10.499757} text={'Rifugio La Maralsina'}/>,
  <Pin lat={46.263688} lng={10.568189} text={'Rifugio Nigritella'}/>,
  <Pin lat={46.258726} lng={10.5098268} text={'Il Clan'}/>,
  <Pin lat={46.260019} lng={10.507972} text={'Clan Corrette'}/>,
  <Pin lat={46.252375} lng={10.470069} text={'Temù'}/>
]

const BigImage = (props) => {
  const style = {
    width: '100%',
    height: '100%'
  }
  return (
    <section className='section nodes bigImage'>
      <div className='section_wrapper'>
        <div className='wrapper_tagline'>
          <h5 className='bold'>{props.title || 'La mappa delle webcam'}</h5>
        </div>
        <div className='bigImage_wrapper'>
          <GoogleMapReact
            style={style}
            defaultCenter={{
              lat: 46.260019,
              lng: 10.507972
            }}
            initialCenter={{
              lat: 46.260019,
              lng: 10.507972
            }}
            defaultZoom={14}
          >
            {props.pin ? <Pin lat={46.238636} lng={10.499757} text={'Rifugio La Maralsina'}/>
            : AllPin.map((pin, i) => pin)}
          </GoogleMapReact>
        </div>
      </div>
    </section>
  )
}

export default BigImage
