import React from 'react'
import { ToastContainer } from 'react-toastify'

const Toast = () => (
  <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar
    newestOnTop={false}
    closeOnClick
    closeButton={false}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
  />
)

export default Toast
