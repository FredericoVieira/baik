import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import useGlobal from '../../store'
import { language } from '../../languages'
import { pins as pinsModel } from '../../models/pins.models'

import Pin from '../ui/Pin.component'
import Text from '../typography/Text.component'
import SecondaryButton from '../buttons/SecondaryButton.component'

const useStyles = makeStyles(theme => ({
  controlSelection: {
    position: 'absolute',
    bottom: 25,
    right: 0,
    padding: 10,
    background: theme.palette.purple.darkness,
    boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridColumnGap: 20,
    '& button': {
      margin: 'auto'
    }
  },
  pins: {
    display: 'grid',
    gridRowGap: 5
  },
  pin: {
    display: 'flex',
    '& svg': {
      marginRight: 5
    }
  }
}))

const ControlSelection = ({ selectedNetwork, setNetwork }) => {
  const classes = useStyles()
  const { labels, buttons } = language
  const [, globalActions] = useGlobal()
  const { clearSelectedNetwork } = globalActions

  const LABELS = {
    pin: labels.networkSelected,
    pins: labels.network,
    stations: labels.station
  }

  const handleTypes = pin => (
    <div className={classes.pin}>
      <Pin key={pin} size={15} type={pin} cursor={false} trasform={false} />
      <Text variant="body2">{LABELS[pin]}</Text>
    </div>
  )

  return (
    <div className={classes.controlSelection}>
      <div className={classes.pins}>{Object.values(pinsModel).map(pin => handleTypes(pin))}</div>
      <SecondaryButton
        size="small"
        text={buttons.clearSelection}
        disabled={!selectedNetwork}
        onClick={() => {
          clearSelectedNetwork()
          setNetwork(null)
        }}
      />
    </div>
  )
}

export default ControlSelection
