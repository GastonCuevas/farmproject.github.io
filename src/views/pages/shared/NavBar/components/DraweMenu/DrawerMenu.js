import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText, Drawer } from '@material-ui/core'
import { Inbox as InboxIcon, Mail as MailIcon } from '@material-ui/icons'
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
      <List>
        {['Inicio', 'Nosotros', 'Contacto'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}