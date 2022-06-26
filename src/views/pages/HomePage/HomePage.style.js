import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles((theme) => ({
  mainContainer: {
    minHeight: '80vh',
    backgroundColor: theme.palette.background.default,
    '& h5': {
      marginBottom: 30
    }
  },
  containerHeader: {
    width: '100%',
    height: '60%',
    textAlign: 'center',
    [theme.breakpoints.up(768)]: {
      height: '50%'
    }
  },
  bodyContainer: {
    margin: '0 auto',
    padding: theme.spacing(4, 0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    [theme.breakpoints.up(768)]: {
      width: '70%'
    }
  },
  previewImage: {
    display: 'flex',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
    justifyContent: 'center',
    width: '100%',
    height: 320,
    alignItems: 'end',
    backgroundImage: 'url(https://images3.alphacoders.com/190/thumb-1920-190787.jpg)',
    [theme.breakpoints.up(768)]: {
      height: 500
    }
  },
  title: {
    color: '#ffff',
    fontSize: '2rem',

    [theme.breakpoints.up(768)]: {
      fontSize: '2.5rem'
    }
  },
  subtitle: {
    color: '#ffff',
    fontSize: '1.5rem'
  },
  slickSlider: {
    width: '100%',
    textAlign: 'center',
    boxShadow: '0px 4px 4px rgba(6, 0, 173, 0.15)'
  },
  card: {
    height: 500,
    backgroundColor: '#ffff',
    display: 'flex !important',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  image: {
    width: '80%',
    height: 300,
    margin: '0 auto',
    marginBottom: 30,
    [theme.breakpoints.up('lg')]: {
      width: '90%'
    }
  },
  button: {
    marginTop: theme.spacing(5),
    textDecoration: 'none',
    backgroundColor: theme.palette.primary.main,
    ' & span': {
      color: '#ffff'
    }
  }
}))
