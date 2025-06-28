export { Page }

import React from 'react'
import { usePageContext } from 'vike-react/usePageContext'
import Layout from '@/components/Layout'

function Page() {
  const pageContext = usePageContext()

  let title = "Something went wrong"
  let message = "Something went wrong. Try again (later)."

  if (pageContext?.is404) {
    title = "Page Not Found"
    message = "The page you're looking for doesn't exist or has been moved."
  } else if (pageContext?.abortStatusCode === 403) {
    title = "Access Denied"
    message = "You don't have enough privileges to access this page."
  } else if (pageContext?.abortStatusCode === 401) {
    title = "Unauthorized"
    message = "You aren't logged in. Please log in to access this page."
  }

  return (
    <Layout>
      <main className="min-h-screen bg-eaststreet-cream flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="mb-8">
            <div className="inline-block p-6 bg-white rounded-full shadow-lg mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-eaststreet-brown">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-eaststreet-brown mb-4">{title}</h1>
            <p className="text-eaststreet-gray mb-8">
              {message}
            </p>
          </div>
          <div className="space-y-4">
            <a href="/" className="btn-primary block">
              Return to Home
            </a>
            <a href="/contact" className="text-eaststreet-brown hover:text-eaststreet-light-brown inline-block">
              Contact Us for Help
            </a>
          </div>
        </div>
      </main>
    </Layout>
  )
}