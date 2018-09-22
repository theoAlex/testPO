import React from 'react'
import Helmet from 'react-helmet'

import Navbar from './Navbar'
import FooterComponent from './FooterComponent'
import '../layouts/all.sass'
    

const Layout = ({ children }) => (
  <div className="wrapper">
    <Helmet title="Home | Gatsby + Netlify CMS" />
    <Navbar />
    <div style={{ height: 'auto' }}>{children}</div>
    <FooterComponent />
  </div>
)

export default Layout
