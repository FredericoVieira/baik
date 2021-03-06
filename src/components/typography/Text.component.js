import React from 'react'
import { Typography } from '@material-ui/core'

const Text = ({ children, color = 'textPrimary', variant = 'body1', className }) => (
  <Typography color={color} variant={variant} className={className}>
    {children}
  </Typography>
)

export default Text
