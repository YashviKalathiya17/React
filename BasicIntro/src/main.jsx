import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BasicExample from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <BasicExample />
  </StrictMode>,
)
