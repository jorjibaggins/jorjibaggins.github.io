export { Page }
export { documentProps }

import React from 'react'
import Layout from '../../components/Layout'
import BlogPost from '../BlogPost'
import '../../index.css'

function Page() {
  return (
    <Layout>
      <BlogPost slug="best-time-sell-sme-singapore-market-cycles-valuations-timing" />
    </Layout>
  )
}

const documentProps = {
  title: 'When Is the Best Time to Sell Your SME in Singapore? Market Cycles, Valuations & Timing',
  description: 'Discover the optimal timing strategies for selling your SME in Singapore. Learn about market cycles, valuation peaks, and strategic timing to maximize your business sale value.'
}