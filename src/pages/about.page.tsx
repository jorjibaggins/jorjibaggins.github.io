export { Page }
export { documentProps }

import React from 'react'
import Layout from '../components/Layout'
import About from './About'
import '../index.css'

function Page() {
  return (
    <Layout>
      <About />
    </Layout>
  )
}

const documentProps = {
  title: 'About Us - East Street Advisory',
  description: 'Learn about East Street Advisory\'s experienced team and our commitment to helping Singapore SMEs with M&A transactions.'
}