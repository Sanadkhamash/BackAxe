import Button from '@mui/material/Button';
import * as React from 'react';

export const SuccessBtn = (props) => {
  return (
    <Button variant="contained" color="success">
        {props.children}
    </Button>
  )
}

export const DangerBtn = (props) => {
  return (
    <Button type='submit' form = {props.formName} variant="outlined" color="error">
    {props.children}
    </Button>
)
}




