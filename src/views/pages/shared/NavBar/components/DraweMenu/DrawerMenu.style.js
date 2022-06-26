import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  backdrop: {
    backgroundColor: theme.utils.rgba(theme.palette.secondary.light, 0.47)
  }
}))
