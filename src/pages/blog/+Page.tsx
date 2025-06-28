export { Page }

import React from 'react'
import Layout from '../../components/Layout'
import Blog from './Blog'
import '../../index.css'

function Page() {
  return (
    <Layout>
      <Blog />
    </Layout>
  )
}