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

  useEffect(() => {
    if (selectedNetwork?.stations) {
      setIsNetworkSelected(true)
      setNetworkState(selectedNetwork)
    } else {
      setIsNetworkSelected(false)
      setNetworkState(network)
    }
  }, [selectedNetwork])

  const { name, company, location } = networkState
  const locationHandled = `${location?.city}, ${location?.country}`

  return (
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
