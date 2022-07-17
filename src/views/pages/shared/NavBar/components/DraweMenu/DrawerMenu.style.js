import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  backdrop: {
    backgroundColor: theme.utils.rgba(theme.palette.secondary.light, 0.47)
  },
  drawer: {
    '& > div > div': {
      width: '100vw',
      [theme.breakpoints.up('md')]: {
        width: '15vw'
      }
    }
  },
  buttonText: {
    fontSize: '1.175rem'
  },
  buttonLinkExternal: {
    paddingLeft: 0,
    paddingRight: 0,
    '& a': {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      display: 'flex',
      textDecoration: 'none',
      color: 'rgba(0, 0, 0, 0.87)'
    }
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2, 1),
    justifyContent: 'flex-start',
    '& button': {
      alignSelf: 'flex-end'
    }
  },
  drawerTitle: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
}))
