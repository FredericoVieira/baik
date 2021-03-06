export const setAlertDialog = (store, open, type, keys = [], cancel = {}, confirm = {}) => {
  const alertDialog = {
    ...store.state.alertDialog,
    open,
    type,
    keys,
    cancel: {
      label: cancel.label || null,
      callback: cancel.callback || null
    },
    confirm: {
      label: confirm.label || null,
      callback: confirm.callback || null
    }
  }

  store.setState({ ...store.state, alertDialog })
}

export default null
