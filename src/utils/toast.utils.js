import React from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import SuccessIcon from '@material-ui/icons/CheckCircleOutlineOutlined'
import WarningIcon from '@material-ui/icons/ReportProblemOutlined'
import ErrorIcon from '@material-ui/icons/ErrorOutlineOutlined'

import { language } from '../languages'

const style = {
  message: {
    display: 'flex',
    alignItems: 'center'
  },
  successIcon: {
    color: '#13C150',
    marginRight: 10
  },
  warningIcon: {
    color: '#FF9300',
    marginRight: 10
  },
  errorIcon: {
    color: '#E10D05',
    marginRight: 10
  }
}

const setToast = (type, messageKey) => {
  const { toast: toastMessages } = language

  const icon = {
    success: <SuccessIcon fontSize="large" style={{ ...style.successIcon }} />,
    warning: <WarningIcon fontSize="large" style={{ ...style.warningIcon }} />,
    error: <ErrorIcon fontSize="large" style={{ ...style.errorIcon }} />
  }

  const completeMessage = (
    <div style={{ ...style.message }}>
      {icon[type]}
      {toastMessages[messageKey] || messageKey}
    </div>
  )

  toast[type](completeMessage)
}

export default setToast
