import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div className="p-4">
      <Head>
        <title>P3RI Salman ITB</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </div>
  )
}

export default Home
