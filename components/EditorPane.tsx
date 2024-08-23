// components/EditorPane.tsx
import Editor from '@monaco-editor/react'
import { useDispatch, useSelector } from 'react-redux'
import { updateCode } from '@/store/editorSlice'
import { RootState } from '@/store/store'

export default function EditorPane() {
  const dispatch = useDispatch()
  const code = useSelector((state: RootState) => state.editor.code)

  const handleEditorChange = (value: string | undefined) => {
    dispatch(updateCode(value || ''))
  }

  return <Editor height='100%' defaultLanguage='html' value={code} onChange={handleEditorChange} theme='vs-dark' />
}
