import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import useGlobal from '../../store'

import LoaderSpinnerComponent from './LoaderSpinner.component'

const useStyles = makeStyles(() => ({
  root: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    zIndex: '9999',
    background: '#353741e3',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

const Loader = () => {
  const classes = useStyles()
  const [globalState] = useGlobal()
  const { showLoader } = globalState.ui

  return showLoader ? (
    <div className={classes.root}>
      <LoaderSpinnerComponent />
    </div>
  ) : null
}

export default Loader
