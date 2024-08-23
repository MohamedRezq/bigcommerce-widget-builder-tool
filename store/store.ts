import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './themeSlice'
import editorReducer from './editorSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    editor: editorReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
