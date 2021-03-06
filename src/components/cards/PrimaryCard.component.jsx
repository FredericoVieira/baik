import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  card: {
    position: 'relative',
    backgroundColor: theme.palette.purple.darkness,
    boxShadow:
      '0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)'
  },
  cardContent: {
    padding: '0px !important'
  }
}))

const PrimaryCard = ({ children }) => {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>{children}</CardContent>
    </Card>
  )
}

export default PrimaryCard
