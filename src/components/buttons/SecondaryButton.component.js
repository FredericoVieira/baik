import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(() => ({
  withoutBorder: {
    border: '0 !important',
    padding: 0
  }
}))

const SecondaryButton = ({
  icon,
  color,
  border = true,
  size = 'medium',
  onClick,
  disabled,
  text
}) => {
  const classes = useStyles()
  return (
    <Button
      startIcon={icon}
      color={color}
      variant="outlined"
      size={size}
      onClick={onClick}
      className={!border ? classes.withoutBorder : null}
      disabled={disabled}
    >
      {text}
    </Button>
  )
}

export default SecondaryButton
