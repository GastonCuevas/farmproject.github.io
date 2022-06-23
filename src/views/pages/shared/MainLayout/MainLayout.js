import React from 'react'
import { useStyles } from './MainLayout.style'

export const MainLayout = ({ children }) => {
  const classes = useStyles()
  return <div className={classes.container}>{children}</div>
}
