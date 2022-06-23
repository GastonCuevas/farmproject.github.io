import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, IconButton } from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'
import { ROUTES } from '~/views/routes'
import { useStyles } from './NavBar.style'

export const NavBar = () => {
  const classes = useStyles()
  return (
    <AppBar position='fixed' className={classes.navBar}>
      <Toolbar>
        <IconButton edge='start' color='inherit' aria-label='menu'>
          <MenuIcon />
        </IconButton>
        <Link to={ROUTES.ROOT} className={classes.appName}>
          Shadow Gluttony
        </Link>
      </Toolbar>
    </AppBar>
  )
}
