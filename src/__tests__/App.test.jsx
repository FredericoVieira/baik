import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from '@material-ui/core/styles'
import App from '../App'
import muiTheme from '../theme/muiTheme'

jest.mock('../utils/numbers.utils', () => ({
  randomIntFromInterval: jest.fn(() => 0)
}))

test('matches snapshot', () => {
  const { container } = render(
    <ThemeProvider theme={muiTheme}>
      <App />
    </ThemeProvider>
  )

  expect(container).toMatchSnapshot()
})

test('renders signin app screen', () => {
  render(
    <ThemeProvider theme={muiTheme}>
      <App />
    </ThemeProvider>
  )

  expect(screen.getByText('E-mail')).toBeInTheDocument()
  expect(screen.getByText('Senha')).toBeInTheDocument()
  expect(screen.getByText('Esqueceu sua senha?')).toBeInTheDocument()
  expect(screen.getByText('Sign In')).toBeInTheDocument()
})
