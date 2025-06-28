export { onRenderHtml }

import ReactDOMServer from 'react-dom/server'
import React from 'react'
import { escapeInject, dangerouslySkipEscape } from 'vike/server'
import type { PageContextServer } from './types'

async function onRenderHtml(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext
  
  // Render page to string
  const pageHtml = ReactDOMServer.renderToString(<Page {...pageProps} />)

  // Handle Head component if it exists
  let headHtml = ''
  if (pageContext.exports.Head) {
    const { Head } = pageContext.exports
    headHtml = ReactDOMServer.renderToString(<Head />)
  }

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Forum&family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
        ${headHtml ? dangerouslySkipEscape(headHtml) : '<title>East Street Advisory</title><meta name="description" content="M&A and business advisory services tailored to Singapore SME business owners" />'}
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which will be serialized and passed to the browser
    }
  }
}