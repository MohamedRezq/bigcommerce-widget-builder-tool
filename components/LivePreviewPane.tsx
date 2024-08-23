// components/LivePreviewPane.tsx
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

export default function LivePreviewPane() {
  const code = useSelector((state: RootState) => state.editor.code)

  return (
    <div
      style={{
        padding: '1rem',
        backgroundColor: '#f5f5f5',
        height: '100%',
        overflow: 'auto'
      }}
      dangerouslySetInnerHTML={{ __html: code }}
    />
  )
}
