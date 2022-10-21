import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'
import { CyclesContextProvider } from './contexts/CyclesContext'
import { ThemeType } from './@types/styled'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme as ThemeType}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
