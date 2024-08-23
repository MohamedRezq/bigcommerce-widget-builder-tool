import { AppBar, Toolbar, Typography, IconButton } from '@mui/material'
import { Brightness4, Brightness7 } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '@/store/themeSlice'
import { RootState } from '@/store/store'

export default function Navbar() {
  const dispatch = useDispatch()
  const mode = useSelector((state: RootState) => state.theme.mode)

  const handleToggleTheme = () => {
    dispatch(toggleTheme())
  }

  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' sx={{ flexGrow: 1 }}>
          My Dashboard
        </Typography>
        <IconButton color='inherit' onClick={handleToggleTheme}>
          {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
