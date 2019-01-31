import React from 'react'
import Header from '../components/header'
import { Link } from 'gatsby'

export default () => (
  <div style={{ color: `teal` }}>
    <Header headerText='This page is not available' />
    <p>Please go to home by clicking <Link to='/'>this link</Link></p>
  </div>
)
