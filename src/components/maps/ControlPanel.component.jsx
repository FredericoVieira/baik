import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import { language } from '../../languages'
import { groupBy, sortPropertiesByValue } from '../../utils/objects.utils'

import Text from '../typography/Text.component'

const useStyles = makeStyles(theme => ({
  controlPanel: {
    position: 'absolute',
    top: 0,
    right: 0,
    maxWidth: 320,
    background: theme.palette.purple.darkness,
    boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
  },
  networksByCountryWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    justifyItems: 'center',
    padding: '0px 10px 20px 10px'
  },
  networksByCountry: {
    display: 'flex',
    flexDirection: 'row',
    '& p:first-child': {
      marginRight: 5
    }
  }
}))

const ControlPanel = ({ networks }) => {
  const classes = useStyles()
  const { labels } = language

  const [sortedNetworksGroupedByCountry, setSortedNetworksGroupedByCountry] = useState([])

  useEffect(() => {
    if (networks.length > 0 && Object.keys(sortedNetworksGroupedByCountry).length === 0) {
      const networksGroupedByCountry = groupBy(networks, 'location', 'country')
      setSortedNetworksGroupedByCountry(sortPropertiesByValue(networksGroupedByCountry))
    }
  }, [networks])

  return (
    <Accordion className={classes.controlPanel}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Text variant="body1">{labels.networksByCountry}</Text>
      </AccordionSummary>
      <AccordionDetails className={classes.networksByCountryWrapper}>
        {sortedNetworksGroupedByCountry.map(({ key, value }) => (
          <div key={key} className={classes.networksByCountry}>
            <Text variant="body2" bold>{`${key}:`}</Text>
            <Text variant="body2" color="textSecondary">
              {value.length}
            </Text>
          </div>
        ))}
      </AccordionDetails>
    </Accordion>
  )
}

export default ControlPanel
