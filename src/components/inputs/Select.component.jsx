import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    marginBottom: 20
  }
}))

const SelectComponent = ({
  options,
  id,
  value,
  name,
  label,
  required,
  onChange,
  multiple = false
}) => {
  const classes = useStyles()
  return (
    <FormControl className={classes.root}>
      <InputLabel>{required ? `${label} *` : label}</InputLabel>
      <Select id={id} value={value} name={name} onChange={onChange} multiple={multiple}>
        {options.map(option => (
          <MenuItem value={option.value}>{option.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default SelectComponent
