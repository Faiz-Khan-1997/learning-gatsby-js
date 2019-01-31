import React from 'react'
import { Link } from 'gatsby'
import Header from '../components/header'
import Container from '../components/container'

export default () => <Container style={{ color: `purple` }}>
  <Link style={{ marginRight: 10 }} to='/about'>About</Link>
  <Link to='/contact'>Contact</Link>
  <Header headerText='Hello World (Typography changed with plugin)' />
  <p>I'm spreading</p>
  <img src='https://source.unsplash.com/random/400x200' alt='' />
</Container>
