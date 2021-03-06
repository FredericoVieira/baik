import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  section: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

const Home = () => {
  const classes = useStyles()

  return <section className={classes.section}>Home screen</section>
}

export default Home
