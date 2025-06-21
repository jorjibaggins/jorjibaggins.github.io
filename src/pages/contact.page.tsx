export { Page }
export { documentProps }

import React from 'react'
import Layout from '../components/Layout'
import Contact from './Contact'
import '../index.css'

function Page() {
  return (
    <Layout>
      <Contact />
    </Layout>
  )
}

const documentProps = {
  title: 'Contact Us - East Street Advisory',
  description: 'Get in touch with East Street Advisory for a confidential consultation about your business needs and M&A opportunities.'
}