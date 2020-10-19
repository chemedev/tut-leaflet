import React from 'react'
import { Marker } from 'react-leaflet'
import { IconLocation } from './IconLocation'

export default () => {
  return (
    <Marker
      position={{ lat: '-32.9477104', lng: '-60.6318086' }}
      icon={IconLocation}
    />
  )
}
