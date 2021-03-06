import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { language } from '../../languages'

import Text from '../typography/Text.component'
import PrimaryButton from '../buttons/PrimaryButton.component'

const useStyles = makeStyles(() => ({
  title: {
    textAlign: 'center',
    marginBottom: 30
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 40
  },
  button: {
    display: 'flex',
    justifyContent: 'center'
  }
}))

const NavBar = () => {
  const classes = useStyles()
  const { labels, buttons } = language

  return (
    <section>
      <div className={classes.title}>
        <Text variant="h1">{labels.bikesInAllLocations}</Text>
        <Text variant="h1">{labels.forEveryOne}</Text>
      </div>
      <div className={classes.subtitle}>
        <Text variant="h4" color="textSecondary">
          {labels.findYourWay}
        </Text>
        <Text variant="h4" color="textSecondary">
          {labels.wheneverYouWant}
        </Text>
      </div>
      <div className={classes.button}>
        <PrimaryButton
          size="large"
          text={buttons.startBikingForFree}
          onClick={() => alert('biking for free')}
        />
      </div>
    </section>
  )
}

export default NavBar
