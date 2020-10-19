import React, { useEffect, useState } from 'react'
import { Map, TileLayer } from 'react-leaflet'
import { useHistory, useLocation } from 'react-router-dom'
import { IconLocation } from './IconLocation'
import { Marker } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

const MapView = props => {
  const [state, setState] = useState({
    currentLocation: {
      lat: 52.52437,
      lng: 13.41053
    },
    zoom: 13
  })

  const location = useLocation()
  const history = useHistory()

  useEffect(() => {
    if (location.state.latitude && location.state.longitude) {
      const currentLocation = {
        lat: location.state.latitude,
        lng: location.state.longitude
      }
      setState({ ...state, currentLocation })
      history.replace({ pathname: '/map', state: {} })
    }
  }, [history, location, state])

  return (
    <Map center={state.currentLocation} zoom={state.zoom}>
      <TileLayer
        url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker
        position={{
          lat: state.currentLocation.lat,
          lng: state.currentLocation.lng
        }}
        icon={IconLocation}
      />
    </Map>
  )
}

export default MapView
