import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from 'components/index/Hero'
import Events from 'components/index/Events'
import Merch from 'components/index/Merch'
import React from 'react'
import Misc from 'components/index/Misc'
import Faq from 'components/index/Faq'

const Home: NextPage = () => {
  return (
    <>
      <Head>

      </Head>
      <React.Fragment>
        <Hero />
        <Events />
        <Merch />
        <Misc />
        <Faq />
      </React.Fragment>
    </>
  )
}

export default Home
