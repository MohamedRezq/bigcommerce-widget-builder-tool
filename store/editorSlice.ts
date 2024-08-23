import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface EditorState {
  code: string
  schema: object
}

const initialState: EditorState = {
  code: '<div>Hello, World!</div>',
  schema: {}
}

const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    updateCode(state, action: PayloadAction<string>) {
      state.code = action.payload
    },
    updateSchema(state, action: PayloadAction<object>) {
      state.schema = action.payload
    }
  }
})

export const { updateCode, updateSchema } = editorSlice.actions

export default editorSlice.reducer
