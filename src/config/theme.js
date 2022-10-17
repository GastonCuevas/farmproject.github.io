import { createTheme } from '@material-ui/core/styles'
import { alpha } from '@material-ui/core/styles/colorManipulator'
const defaultTheme = createTheme()
export const theme = createTheme({
  palette: {
    // paleta de color
    background: {
      default: '#E8E8E8'
    },
    primary: {
      // modificar color
      light: '#3E00FF',
      main: 'rgb(248, 77, 77)',
      dark: '#3E00FF',
      contrastText: '#fff'
    },
    secondary: {
      // modificar color
      light: 'rgb(227, 255, 216)',
      main: 'rgba(107, 255, 48,0.9)',
      dark: '#AE00FB',
      contrastText: '#fff'
    },
    success: {
      light: '#80e872',
      main: '#4bb543',
      dark: '#008410',
      contrastText: '#fff'
    }
  },
  utils: {
    rgba: (color, opacity = 1) => alpha(color, opacity)
  },
  overrides: {
    MuiPaper: {
      rounded: {
        borderRadius: 0
      }
    },
    MuiButton: {
      root: {
        borderRadius: 0,
        textTransform: 'none'
      },
      label: {
        fontWeight: 400
      }
    },
    MuiInputBase: {
      root: {
        '& fieldset': {
          borderRadius: 0
        }
      }
    },
    MuiFormControl: {
      root: {
        padding: 0
      }
    },
    MuiFilledInput: {
      root: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        marginBottom: defaultTheme.spacing(),
        backgroundColor: '#f0f0f0'
      },
      input: {
        padding: defaultTheme.spacing(2)
      },
      inputMarginDense: {
        paddingTop: defaultTheme.spacing(2),
        paddingBottom: defaultTheme.spacing(2)
      },
      underline: {
        '&:after': {
          borderBottom: 'none'
        },
        '&:before': {
          borderBottom: 'none'
        },
        '&:hover:before': {
          borderBottom: 'none'
        }
      }
    },
    MuiInput: {
      underline: {
        '&:before': {
          // underline color when textfield is inactive
          borderBottom: '1px solid #5c35e0'
        },
        '&:hover:not($disabled):before': {
          // underline color when hovered
          borderBottom: '1px solid #0600ad'
        }
      }
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: 'Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif',
    // fontFamily: 'Concert One',
    // fontFamily: 'EB Garamond',
    // fontFamily: 'Open Sans',
    // fontFamily: 'Glegoo',
    h1: {
      fontSize: '4rem'
    },
    h2: {
      fontSize: '2rem'
    },
    h3: {
      fontSize: '1.75rem'
    },
    h4: {
      fontSize: '1.5rem'
    },
    h5: {
      fontSize: '1.5rem'
    },
    h6: {
      fontSize: '1.5rem'
    }
  }
})

export default theme
