import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { ThemeType } from './@types/styled'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme as ThemeType}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
