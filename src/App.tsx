import { Button } from './components/Button'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { ThemeType } from './@types/styled'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme as ThemeType}>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="success" />
      <Button variant="danger" />
      <Button />

      <GlobalStyle />
    </ThemeProvider>
  )
}
