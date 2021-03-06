import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontSize: 18,
    fontFamily: ['Source Sans Pro']
  },
  palette: {
    primary: {
      main: '#F2AB1D'
    },
    secondary: {
      main: '#D64C1C'
    },
    info: {
      main: '#E42D95'
    },
    purple: {
      darkest: '#0B1113',
      darkness: '#131D20',
      dark: '#1F2E33',
      light: '#263A40'
    },
    gray: {
      darkness: '#353741',
      dark: '#747474',
      main: '#F2F2F2',
      light: '#E0E0E0'
    },
    auxiliary: {
      red: '#E10D05',
      green: '#13C150',
      white: '#FFF',
      black: '#000'
    },
    text: {
      primary: '#FFF',
      secondary: '#ABABAB',
      terciary: '#F2F2F2'
    }
  },
  overrides: {
    MuiButton: {
      contained: {
        '&Primary': {
          color: '#F2F2F2 !important'
        },
        '&Secondary': {
          color: '#F2F2F2 !important'
        },
        '&$disabled': {
          color: '#747474 !important',
          backgroundColor: '#ffffff1f'
        }
      },
      outlined: {
        color: '#F2F2F2',
        border: '1px solid rgba(255, 255, 255, 0.23)',
        '&:hover': {
          textDecoration: 'none',
          backgroundColor: 'inherit !important'
        },
        '&$disabled': {
          color: '#353741',
          border: '1px solid rgba(255, 255, 255, 0.23)'
        }
      }
    },
    MuiFormControlLabel: {
      label: {
        color: '#FFF'
      }
    },
    MuiFormLabel: {
      root: {
        '&$disabled': {
          color: '#747474'
        }
      }
    },
    MuiInput: {
      input: {
        '&:-webkit-autofill': {
          WebkitBoxShadow: '0 0 0 1000px #353741 inset',
          WebkitTextFillColor: '#FFF'
        }
      },
      underline: {
        '&::before': {
          borderBottom: '1px solid #F2F2F2'
        },
        '&$disabled': {
          color: '#747474'
        }
      }
    },
    MuiOutlinedInput: {
      notchedOutline: {
        borderColor: '#FFF'
      }
    },
    MuiPaper: {
      root: {
        backgroundColor: '#353741'
      }
    },
    MuiListItem: {
      root: {
        backgroundColor: '#353741',
        '&:hover': {
          backgroundColor: '#263A40 !important'
        },
        '& button ~ p': {
          marginRight: 12
        }
      }
    },
    MuiAppBar: {
      root: {
        boxShadow: 'none',
        backgroundColor: '#020405 !important'
      }
    },
    MuiTooltip: {
      tooltip: {
        fontSize: 12
      }
    },
    MuiTypography: {
      colorError: {
        color: '#E10D05'
      }
    }
  }
})

export default theme
