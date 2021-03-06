export const setShowLoader = (store, showLoader) => {
  const ui = {
    ...store.state.ui,
    showLoader
  }
  store.setState({ ...store.state, ui })
}

export default null
