import React, { useMemo } from 'react'
import { Marker } from 'react-map-gl'

import { pins as pinsModel } from '../../models/pins.models'
import Pin from '../ui/Pin.component'

const Pins = ({ networks, selectedNetwork, setNetwork }) => {
  const handleMarker = (network, type) =>
    network && (
      <Marker
        key={`marker-${network.id}`}
        longitude={network.location?.longitude}
        latitude={network.location?.latitude}
      >
        <Pin type={type} onClick={() => setNetwork(network)} />
      </Marker>
    )

  const pin = useMemo(() => handleMarker(selectedNetwork, pinsModel.PIN), [selectedNetwork])

  const stationPinsHandled =
    selectedNetwork?.stations?.map(station => ({
      id: station.id,
      name: station.name,
      emptySlots: station.empty_slots,
      freeBikes: station.free_bikes,
      location: { latitude: station.latitude, longitude: station.longitude },
      isStation: true
    })) || null

  const stationPins = useMemo(
    () =>
      stationPinsHandled?.map(station => handleMarker(station, pinsModel.STATIONS), [
        selectedNetwork
      ]) || null
  )

  const pins = useMemo(() =>
    networks.map(network => handleMarker(network, pinsModel.PINS), [networks])
  )

  return selectedNetwork ? [pin, stationPins] : pins
}

export default Pins
