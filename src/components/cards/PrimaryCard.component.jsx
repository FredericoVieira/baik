import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  card: {
    backgroundColor: theme.palette.gray.darkness,
    boxShadow:
      '0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)'
  },
  cardScreen: {
    width: 380
  },
  cardContent: {
    padding: '20px !important'
  },
  cardContentScreen: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '40px !important'
  }
}))

const PrimaryCard = ({ children, variant, width }) => {
  const classes = useStyles()
  const extraCardClass = variant === 'screen' ? classes.cardScreen : ''
  const extraCardContent = variant === 'screen' ? classes.cardContentScreen : ''

  return (
    <Card className={`${classes.card} ${extraCardClass}`} {...(width && { style: { width } })}>
      <CardContent className={`${classes.cardContent} ${extraCardContent}`}>{children}</CardContent>
    </Card>
  )
}

export default PrimaryCard
