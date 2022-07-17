import React, { useState } from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, IconButton } from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'
import { ROUTES } from '~/views/routes'
import { DrawerMenu } from './components'
import { useStyles } from './NavBar.style'

export const NavBar = ({ transparent }) => {
  const classes = useStyles()
  const [openMenuDrawer, setOpenMenuDrawer] = useState(false)
  return (
    <AppBar
      position='fixed'
      className={clsx(classes.navBar, transparent && classes.appBarTransparent)}>
      <Toolbar>
        <IconButton
          edge='start'
          color='inherit'
          aria-label='menu'
          onClick={() => setOpenMenuDrawer(true)}>
          <MenuIcon />
        </IconButton>
        <Link to={ROUTES.ROOT} className={classes.appName}>
          Gastón's Farm
        </Link>
      </Toolbar>
      <DrawerMenu openDrawer={openMenuDrawer} onClose={() => setOpenMenuDrawer(false)} />
    </AppBar>
  )
}
