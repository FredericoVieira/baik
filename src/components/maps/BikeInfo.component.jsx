import React, { useState, useEffect } from 'react'

import useGlobal from '../../store'
import { language } from '../../languages'

import Text from '../typography/Text.component'
import SecondaryButton from '../buttons/SecondaryButton.component'

const BikeInfo = ({ network }) => {
  const { labels, buttons } = language
  const [globalState, globalActions] = useGlobal()
  const { selectedNetwork } = globalState.bikes
  const { getNetworkDetails, clearSelectedNetwork } = globalActions

  const [networkState, setNetworkState] = useState({})
  const [isNetworkSelected, setIsNetworkSelected] = useState(false)
  const [isStationSelected, setIsStationSelected] = useState(false)

  useEffect(() => {
    if (network?.isStation) {
      setIsStationSelected(true)
      setNetworkState(network)
    } else if (selectedNetwork?.stations) {
      setIsNetworkSelected(true)
      setNetworkState(selectedNetwork)
    } else {
      setIsNetworkSelected(false)
      setNetworkState(network)
    }
  }, [network, selectedNetwork])

  const { name, company, location } = networkState
  const locationHandled = `${location?.city}, ${location?.country}`

  return isStationSelected ? (
    <div>
      <Text variant="h6">{name}</Text>
      <Text
        variant="body1"
        color="textSecondary"
      >{`${labels.freeBikes}: ${network?.freeBikes}`}</Text>
      <Text
        variant="body1"
        color="textSecondary"
      >{`${labels.emptySlots}: ${network?.emptySlots}`}</Text>
      <Text variant="body1" color="textSecondary">{`${labels.slots}: ${
        network?.freeBikes + network?.emptySlots
      }`}</Text>
    </div>
  ) : (
    <div>
      <Text variant="h6">{name}</Text>
      <Text variant="body1" color="textSecondary">{`${labels.company}: ${company?.[0]}`}</Text>
      <Text variant="body1" color="textSecondary">
        {locationHandled}
      </Text>
      {isNetworkSelected && (
        <Text variant="body1" color="textSecondary">
          {`${labels.stations}: ${networkState?.stations?.length}`}
        </Text>
      )}
      <br />
      <SecondaryButton
        size="small"
        text={isNetworkSelected ? buttons.back : buttons.details}
        onClick={() => (isNetworkSelected ? clearSelectedNetwork() : getNetworkDetails(network))}
      />
    </div>
  )
}

export default BikeInfo
