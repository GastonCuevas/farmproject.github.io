import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles((theme) => ({
  navBar: {
    transition: 'all .3s',
    right: 'auto',
    left: 'auto',
    backgroundColor: theme.palette.primary.main,
    boxShadow: 'none',
    height: 70,
    [theme.breakpoints.up('xl')]: {
      maxWidth: 1920
    }
  },
  appBarTransparent: {
    backgroundColor: 'transparent'
  },
  appName: {
    flexGrow: 1,
    textDecoration: 'none',
    color: '#ffff'
  }
}))
