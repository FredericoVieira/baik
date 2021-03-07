import requester from '../resources/requester'
import setToast from '../utils/toast.utils'

export const setNetworks = (store, data) => {
  const bikes = {
    ...store.state.bikes,
    ...data
  }
  store.setState({ ...store.state, bikes })
}

export const getNetworks = async store => {
  store.actions.setShowLoader(true)
  const [error, response] = await requester('GET', '/networks', null)
  if (error) {
    setToast('error', 'getNetworksError')
  } else {
    setNetworks(store, response)
  }
  store.actions.setShowLoader(false)
}
