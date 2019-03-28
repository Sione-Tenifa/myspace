import React from 'react'
import {Header, Image} from 'semantic-ui-react'
import tom from './tom.jpg'

const Home = () => (
  <Header as='h1' textAlign='center'>
    Myspace
    <Image src={tom}/>
  </Header>
)

export default Home