import React from 'react'
import { listItemSecondaryActionClasses, TextField } from '@mui/material'
import { Input, InputAdornment, AccountCircle } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const UnderLinedText = ({name,label}) => {
  return (
    <TextField id={name} label={label} variant="standard" name={name} />
  )
}

export const underLinedTextErr = ({name,label}) => {
  return (
    <TextField
    error
    id={name}
    name={name}
    label={label}
    defaultValue=""
    helperText="Incorrect entry."
    variant="standard"
  />  )
}

export const StartIconText = (children) => {
  return (
    <Input
    id="input-with-icon-adornment"
    startAdornment={
      <InputAdornment position="start">
        {children}
      </InputAdornment>
    }
  />  )
}

export function Selectors({label, items, id}) {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id={id}>{label}</InputLabel>
        <Select
          labelId={id}
          id={id}
          value={value}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          
          {/* {items.map((item,id)=>
          {return(
            <MenuItem value={10}>{item}</MenuItem>
          )}) 
          }         */}
        </Select>
      </FormControl>
      </div>
  );
}



