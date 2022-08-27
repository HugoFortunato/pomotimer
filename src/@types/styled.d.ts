import 'styled-components'

export type ThemeType = {
  white: string
  primary: string
  secondary: string

  gray100?: string
  gray300?: string
  gray400?: string
  gray500?: string
  gray600?: string
  gray700?: string
  gray800?: string
  gray900?: string

  green300?: string
  green500?: string
  green700?: string

  red500?: string
  red700?: string

  yellow500?: string
}

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
