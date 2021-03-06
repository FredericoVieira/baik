import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '@material-ui/core/styles'
import App from '../App'
import muiTheme from '../theme/muiTheme'

test('matches snapshot', () => {
  const { container } = render(
    <ThemeProvider theme={muiTheme}>
      <App />
    </ThemeProvider>
  )

  expect(container).toMatchSnapshot()
})

test('renders properly', () => {
  render(
    <ThemeProvider theme={muiTheme}>
      <App />
    </ThemeProvider>
  )

  expect(screen.getByText('Baik')).toBeInTheDocument()
  expect(screen.getByText('CONNECTING USERS TO BIKES')).toBeInTheDocument()
  expect(screen.getByText('Bikes in all locations')).toBeInTheDocument()
  expect(screen.getByText('for everyone')).toBeInTheDocument()
  expect(screen.getByText(/Find your way to come and go/)).toBeInTheDocument()
  expect(screen.getByText(/We are a sustainable company/)).toBeInTheDocument()
  expect(screen.getByText(/Find your bike. Cycle to your destination./)).toBeInTheDocument()
  expect(screen.getByText('Repeat.')).toBeInTheDocument()
  expect(screen.getByText('Any doubts?')).toBeInTheDocument()

  expect(screen.getByRole('button', { name: 'Start biking for free' })).toBeInTheDocument()
  expect(screen.getByRole('button', { name: 'Contact us' })).toBeInTheDocument()

  expect(screen.getByRole('img', { name: 'baik-logo' })).toBeInTheDocument()
  expect(screen.getByRole('img', { name: 'user-bikes' })).toBeInTheDocument()
  expect(screen.getByRole('img', { name: 'background' })).toBeInTheDocument()
})
