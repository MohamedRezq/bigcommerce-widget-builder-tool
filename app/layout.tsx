'use client'

import './globals.css'
import { Provider } from 'react-redux'
import CustomThemeProvider from './theme'
import { store } from '../store/store'
import Navbar from '../components/Navbar'
import WidgetEditor from '../components/WidgetEditor'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Provider store={store}>
          <CustomThemeProvider>
            <Navbar />
            <WidgetEditor />
            {children}
          </CustomThemeProvider>
        </Provider>
      </body>
    </html>
  )
}
