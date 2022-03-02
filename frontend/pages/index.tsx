import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from 'components/index/Hero'
import Events from 'components/index/Events'
import Merch from 'components/index/Merch'

const Home: NextPage = () => {
  return (
    <>
      <Head>

      </Head>
      <Hero />
      <Events />
      <Merch />
    </>
  )
}

export default Home
