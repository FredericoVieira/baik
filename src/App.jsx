import React from 'react'

import Home from './screens/Home.screen'
import NavBar from './components/layout/NavBar.layout'

import AlertDialog from './components/dialogs/AlertDialog.component'
import Toast from './components/ui/Toast.component'

const App = () => (
  <>
    <NavBar />
    <Home />
    <AlertDialog />
    <Toast />
  </>
)

export default App
