import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  container: {
    // backgroundColor: '#ffff',
    margin: '0 auto',
    overflowX: 'hidden',
    [theme.breakpoints.up('xl')]: {
      maxWidth: 1920
    }
  }
}))
