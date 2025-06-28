export { onRenderClient }

import React from 'react'
import ReactDOM from 'react-dom/client'
import type { PageContextClient } from './types'

let root: ReactDOM.Root

async function onRenderClient(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext
  
  const container = document.getElementById('root')!
  
  if (!root) {
    root = ReactDOM.createRoot(container)
  }
  
  root.render(<Page {...pageProps} />)
}