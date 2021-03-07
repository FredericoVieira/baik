import React, { useState, useEffect } from 'react'
import ReactMapGL, {
  Popup,
  GeolocateControl,
  NavigationControl,
  FullscreenControl,
  ScaleControl
} from 'react-map-gl'
import { mapboxToken, mapboxStyle } from '../../resources/config'
import Pins from './Pins.component'
import BikeInfo from './BikeInfo.component'
import ControlPanel from './ControlPanel.component'

const BikesMap = ({ networks, selectedNetwork }) => {
  const [viewportState, setViewportState] = useState({
    latitude: 9.081999,
    longitude: 8.675277,
    zoom: 1
  })

  const [network, setNetwork] = useState(null)

  const geolocateStyle = {
    top: 0,
    left: 0,
    margin: 10
  }

  const fullscreenControlStyle = {
    top: 36,
    left: 0,
    padding: '10px'
  }

  const navStyle = {
    top: 72,
    left: 0,
    padding: '10px'
  }

  const scaleControlStyle = {
    bottom: 36,
    left: 0,
    padding: '10px'
  }

  const positionOptions = { enableHighAccuracy: true }

  return (
    <>
      <ReactMapGL
        {...viewportState}
        width="100%"
        height="70vh"
        onViewportChange={viewport => setViewportState(viewport)}
        mapStyle={mapboxStyle}
        mapboxApiAccessToken={mapboxToken}
      >
        <Pins networks={networks} selectedNetwork={selectedNetwork} setNetwork={setNetwork} />
        {network && (
          <Popup
            tipSize={5}
            anchor="top"
            longitude={network.location.longitude}
            latitude={network.location.latitude}
            closeOnClick={false}
            onClose={setNetwork}
          >
            <BikeInfo network={network} selectedNetwork={selectedNetwork} />
          </Popup>
        )}
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={positionOptions}
          trackUserLocation
          auto={false}
        />
        <FullscreenControl style={fullscreenControlStyle} />
        <NavigationControl style={navStyle} />
        <ScaleControl style={scaleControlStyle} />
      </ReactMapGL>
      <ControlPanel networks={networks} />
    </>
  )
}

export default BikesMap
