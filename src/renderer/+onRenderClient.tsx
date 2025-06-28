export { onRenderClient }

import React from 'react'
import ReactDOM from 'react-dom/client'
import type { PageContextClient } from './types'

async function onRenderClient(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext
  
  const root = ReactDOM.createRoot(document.getElementById('root')!)
  root.render(<Page {...pageProps} />)
}