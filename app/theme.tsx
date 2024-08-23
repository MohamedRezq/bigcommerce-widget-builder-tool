import { createTheme, ThemeProvider, CssBaseline } from '@mui/material'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

export default function CustomThemeProvider({ children }: { children: React.ReactNode }) {
  const mode = useSelector((state: RootState) => state.theme.mode)

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode
        }
      }),
    [mode]
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
