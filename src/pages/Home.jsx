import { Container } from '@mui/material'
import React from 'react'
import KpiCards from '../components/KpiCards'
import Charts from '../components/tables/Charts'

const Home = () => {
  return (
<Container maxWidth='xl' >
<KpiCards/>
<Charts/>

</Container>)
}

export default Home