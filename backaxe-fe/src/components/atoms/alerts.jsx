import React from 'react'
import { Alert } from '@mui/material'

export const ErrAlert = (props) => {
  return (
    <Alert severity="error">{props.children}</Alert>
  )
}
export const WarningAlert = (props) => {
  return (
    <Alert severity="warning">{props.children}</Alert>
  )
}
export const BlueAlert = (props) => {
  return (
    <Alert severity="info">{props.children}</Alert>

  )
}
export const SuccessAlert = (props) => {
  return (
    <Alert severity="success">{props.children}</Alert>

  )
}

