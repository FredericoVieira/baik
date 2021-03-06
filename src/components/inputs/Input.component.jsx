import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(() => ({
  input: {
    minWidth: 200,
    marginBottom: 20
  }
}))

const Input = ({
  id,
  error,
  helperText,
  label,
  disabled,
  required,
  fullWidth,
  value,
  onChange,
  onFocus,
  type,
  multiline,
  rows,
  rowsMax,
  withClass = true,
  ...props
}) => {
  const classes = useStyles()
  return (
    <TextField
      id={id}
      error={error}
      helperText={helperText}
      label={label}
      disabled={disabled}
      required={required}
      fullWidth={fullWidth}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      type={type}
      multiline={multiline}
      rows={rows}
      rowsMax={rowsMax}
      className={withClass ? (typeof withClass === 'boolean' ? classes.input : withClass) : ''}
      {...props}
    />
  )
}

export default Input
