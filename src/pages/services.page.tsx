export { Page }
export { documentProps }

import React from 'react'
import Layout from '../components/Layout'
import Services from './Services'
import '../index.css'

function Page() {
  return (
    <Layout>
      <Services />
    </Layout>
  )
}

const documentProps = {
  title: 'Our Services - East Street Advisory',
  description: 'Comprehensive M&A advisory, business valuation, and exit strategy planning services for Singapore businesses.'
}