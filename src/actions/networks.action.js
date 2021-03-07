import requester from '../resources/requester'
import setToast from '../utils/toast.utils'

export const setNetworks = (store, data) => {
  const bikes = {
    ...store.state.bikes,
    ...data
  }
  store.setState({ ...store.state, bikes })
}

export const setSelectedNetwork = (store, data) => {
  const bikes = {
    ...store.state.bikes,
    selectedNetwork: data
  }
  store.setState({ ...store.state, bikes })
}

export const clearSelectedNetwork = store => {
  const bikes = {
    ...store.state.bikes,
    selectedNetwork: null
  }
  store.setState({ ...store.state, bikes })
}

export const getNetworks = async store => {
  const [error, response] = await requester('GET', '/networks')
  if (error) {
    setToast('error', 'getNetworksError')
  } else {
    setNetworks(store, response)
  }
}

export const getNetworkDetails = async (store, network) => {
  store.actions.setShowLoader(true)
  const [error, response] = await requester('GET', `/networks/${network.id}`)
  if (error) {
    setToast('error', 'getNetworkDetailError')
  } else {
    setSelectedNetwork(store, response.network)
  }
  store.actions.setShowLoader(false)
}
