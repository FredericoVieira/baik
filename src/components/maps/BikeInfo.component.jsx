import React, { useMemo } from 'react'
import { Marker } from 'react-map-gl'

import { language } from '../../languages'

import Text from '../typography/Text.component'

const BikeInfo = ({ network }) => {
  const { labels } = language

  const { id, name, company, location, href } = network
  const locationHandled = `${location.city}, ${location.country}`

  return (
    <div>
      <Text variant="h6">{name}</Text>
      <Text variant="body1" color="textSecondary">{`${labels.company}: ${company[0]}`}</Text>
      <Text variant="body1" color="textSecondary">
        {locationHandled}
      </Text>
      <a
        target="_new"
        href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${locationHandled}`}
      >
        Wikipedia
      </a>
    </div>
  )
}

export default BikeInfo
