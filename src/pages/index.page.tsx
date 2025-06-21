export { Page }
export { documentProps }

import React from 'react'
import Layout from '../components/Layout'
import Index from './Index'
import '../index.css'

function Page() {
  return (
    <Layout>
      <Index />
    </Layout>
  )
}

const documentProps = {
  title: 'East Street Advisory - M&A and Business Advisory Services',
  description: 'Professional M&A advisory services for Singapore SME business owners. Get expert guidance on mergers, acquisitions, and business valuations.'
}