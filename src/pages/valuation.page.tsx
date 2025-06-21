export { Page }
export { documentProps }

import React from 'react'
import Layout from '../components/Layout'
import Valuation from './Valuation'
import '../index.css'

function Page() {
  return (
    <Layout>
      <Valuation />
    </Layout>
  )
}

const documentProps = {
  title: 'Free Business Valuation - East Street Advisory',
  description: 'Get a professional, confidential business valuation completely free. Understand your company\'s true market value today.'
}