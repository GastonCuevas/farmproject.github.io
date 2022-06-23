import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles((theme) => ({
  mainContainer: {
    minHeight: '80vh',
    '& h5': {
      marginBottom: 30
    }
  },
  containerHeader: {
    width: '50%',
    height: '50%'
  },
  bodyContainer: {
    margin: '30px auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#ffffff',
    [theme.breakpoints.up(768)]: {
      width: '70%'
    }
  },
  previewImage: {
    display: 'flex',
    marginTop: 67,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 500,
    alignItems: 'end',
    backgroundImage:
      'url(https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2019/12/20/plwijovwbm4jfialzvv5/gaming-in-2020-best-games)'
  },
  title: {
    color: '#ffff',
    fontSize: '2.5rem',
    marginBottom: 20
  },
  subtitle: {
    color: '#ffff',
    fontSize: '1.5rem'
  },
  slickSlider: {
    width: '100%',
    textAlign: 'center'
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
