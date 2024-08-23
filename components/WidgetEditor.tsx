// components/WidgetEditor.tsx
import { Box } from '@mui/material'
import EditorPane from './EditorPane'
import LivePreviewPane from './LivePreviewPane'

export default function WidgetEditor() {
  return (
    <Box sx={{ display: 'flex', height: 'calc(100vh - 64px)' }}>
      <Box sx={{ width: '50%', borderRight: '1px solid #ddd' }}>
        <EditorPane />
      </Box>
      <Box sx={{ width: '50%' }}>
        <LivePreviewPane />
      </Box>
    </Box>
  )
}
