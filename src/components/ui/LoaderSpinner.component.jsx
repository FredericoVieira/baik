import React from 'react'
import LoaderSpinnerComponent from 'react-loader-spinner'

const LoaderSpinner = ({
  color = '#F2AB1D',
  width = 80,
  height = 80,
  className = '',
  sytle = {}
}) => (
  <LoaderSpinnerComponent
    type="Circles"
    color={color}
    height={height}
    width={width}
    className={className}
    style={sytle}
  />
)

export default LoaderSpinner
