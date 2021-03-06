import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import { language } from '../../languages'

import Text from '../typography/Text.component'
import baikLogo from '../../assets/images/baik.png'

const useStyles = makeStyles(() => ({
  toolbar: {
    paddingLeft: 40,
    paddingRight: 40,
    display: 'flex',
    justifyContent: 'space-between'
  },
  logoWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  logo: {
    width: 50,
    marginRight: 10
  }
}))

const NavBar = () => {
  const classes = useStyles()
  const { labels } = language

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <div className={classes.logoWrapper}>
          <img src={baikLogo} alt="logo" className={classes.logo} />
          <Text variant="h4">Baik</Text>
        </div>
        <Text variant="h6">{labels.connectingUsersToBikes}</Text>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
