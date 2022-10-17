import React from 'react'
import { Link } from 'react-router-dom'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  IconButton,
  Divider,
  DialogTitle
} from '@material-ui/core'

import {
  PhoneAndroid as PhoneAndroidIcon,
  LocationOn as LocationOnIcon,
  Info as InfoIcon,
  Home as HomeIcon,
  ChevronLeft as ChevronLeftIcon
} from '@material-ui/icons'
import iconFarm from '~/assets/icon-farm-3.png'
import { ROUTES } from '~/views/routes'
import { useStyles } from './DrawerMenu.style'
export const DrawerMenu = ({ onClose, openDrawer }) => {
  const classes = useStyles()

  return (
    <Drawer
      anchor='left'
      open={openDrawer}
      onClose={onClose}
      BackdropProps={{
        classes: {
          root: classes.backdrop
        }
      }}
      className={classes.drawer}>
      <div className={classes.drawerTitle}>
        <div className={classes.drawerHeader}>
          <div
            style={{
              backgroundImage: `url(${iconFarm})`,
              width: 70,
              height: 60,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain'
            }}
          />
          <DialogTitle>Herencia</DialogTitle>
        </div>
        <IconButton onClick={onClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button component={Link} to={ROUTES.ROOT}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary='Inicio' className={classes.buttonText} />
        </ListItem>
        <ListItem button component={Link} to={ROUTES.US}>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary='Sobre nosotros' className={classes.buttonText} />
        </ListItem>
        <ListItem button className={classes.buttonLinkExternal}>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.google.com/maps/place/Gordaliza+1698,+San+Salvador+de+Jujuy,+Jujuy/@-24.1927538,-65.3145103,17z/data=!3m1!4b1!4m5!3m4!1s0x941b0f385365cd3b:0x59b404e7d8511a3c!8m2!3d-24.1927587!4d-65.3123216'>
            <ListItemIcon>
              <LocationOnIcon />
            </ListItemIcon>
            <ListItemText primary='Cómo encontrarnos' className={classes.buttonText} />
          </a>
        </ListItem>
        <ListItem button className={classes.buttonLinkExternal}>
          <a
            href='https://wa.me/+5493884373832/?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20sus%20productos%20por%20favor.'
            target='_blank'
            rel='noopener noreferrer'>
            <ListItemIcon>
              <PhoneAndroidIcon />
            </ListItemIcon>
            <ListItemText primary='Contáctanos' className={classes.buttonText} />
          </a>
        </ListItem>
      </List>
    </Drawer>
  )
}
