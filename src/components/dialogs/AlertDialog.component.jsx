import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Dialog, DialogActions, DialogContent } from '@material-ui/core'

import useGlobal from '../../store'
import { language } from '../../languages'

import { replaceAll } from '../../utils/strings.utils'

import Text from '../typography/Text.component'
import PrimaryButton from '../buttons/PrimaryButton.component'
import SecondaryButton from '../buttons/SecondaryButton.component'

const useStyles = makeStyles(theme => ({
  dialog: {
    width: 380,
    color: theme.palette.auxiliary.white,
    backgroundColor: theme.palette.gray.darkness
  },
  dialogTitle: {
    padding: '16px 24px'
  }
}))

const AlertDialog = () => {
  const classes = useStyles()
  const { dialogs, buttons } = language
  const [globalState, globalActions] = useGlobal()
  const { open, type, keys, cancel, confirm } = globalState.alertDialog
  const { setAlertDialog } = globalActions

  const handleButtons =
    confirm && confirm.callback ? (
      <>
        <SecondaryButton
          text={cancel.label || buttons.cancel}
          onClick={() => {
            if (cancel.callback) cancel.callback()
            setAlertDialog(false)
          }}
        />
        <PrimaryButton
          text={confirm.label || buttons.agree}
          onClick={() => {
            confirm.callback()
            setAlertDialog(false)
          }}
        />
      </>
    ) : (
      <PrimaryButton text={buttons.agree} onClick={() => setAlertDialog(false)} />
    )

  return type ? (
    <Dialog open={open}>
      <div className={classes.dialog}>
        <div className={classes.dialogTitle}>
          <Text variant="h5">{dialogs.alert[type].title}</Text>
        </div>
        <DialogContent>
          {dialogs.alert[type].description.split('\n').map(item => (
            <Text key={item.substring(3)} variant="body1">
              {keys && keys.length
                ? replaceAll(
                    item,
                    keys.reduce(
                      (acc, curr, index) => ({ ...acc, [`{{key${index + 1}}}`]: curr }),
                      {}
                    )
                  )
                : item}
            </Text>
          ))}
        </DialogContent>
        <DialogActions>{handleButtons}</DialogActions>
      </div>
    </Dialog>
  ) : null
}

export default AlertDialog
