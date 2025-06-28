export { Page }
export { documentProps }

import React from 'react'
import Layout from '../components/Layout'
import Blog from './Blog'
import '../index.css'

function Page() {
  return (
    <Layout>
      <Blog />
    </Layout>
  )
}

const documentProps = {
  title: 'Business Insights & Market Intelligence - East Street Advisory',
  description: 'Expert analysis on Singapore\'s M&A market, business valuations, and strategic exits. Get insights on selling your SME in Singapore.'
}