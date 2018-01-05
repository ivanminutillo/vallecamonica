import React from 'react'
import './style.scss'
import {GoogleApiWrapper, Map, Marker} from 'google-maps-react'
import GoogleMapReact from 'google-map-react'
import GoogleMapMarkers from 'google-map-react'

const BigImage = (props) => {
  const style = {
    width: '100%',
    height: '100%'
  }

  return (
    <section className='section nodes bigImage'>
      <div className='section_wrapper'>
        <div className='wrapper_tagline'>
          <h5 className='bold'>La mappa delle webcam</h5>
        </div>
        <div className='bigImage_wrapper'>
          <GoogleMapReact
            style={style}
            defaultCenter={{
              lat: 45.9547448,
              lng: 10.2805754
            }}
            initialCenter={{
              lat: 45.9547448,
              lng: 10.2805754
            }}
            defaultZoom={15}
          >
            <GoogleMapMarkers>
              <Marker
                lat={59.955413}
                lng={30.337844}
              />
              </GoogleMapMarkers>
          </GoogleMapReact>
        </div>
      </div>
    </section>
  )
}

export default BigImage
