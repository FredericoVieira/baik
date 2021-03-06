import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  gray: {
    background: theme.palette.gray.light,
    color: `${theme.palette.purple.darkness} !important`,
    '&:hover': {
      backgroundColor: 'rgba(242, 242, 242, 0.5)'
    }
  }
}))

const PrimaryButton = ({
  icon,
  variant = 'contained',
  size = 'medium',
  fullWidth,
  onClick,
  color = 'primary',
  extraColor,
  disabled,
  text
}) => {
  const classes = useStyles()
  return (
    <Button
      startIcon={icon}
      color={color}
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      onClick={onClick}
      className={`${extraColor === 'gray' ? classes.gray : ''}`}
      disabled={disabled}
    >
      {text}
    </Button>
  )
}

export default PrimaryButton
