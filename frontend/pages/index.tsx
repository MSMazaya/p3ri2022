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
     // <main className="p-5 bg-red">

  //      <h1 className="text-center">
    //      Welcome to
      //  </h1>
      //  <Link href="/test">testgan</Link>
 //     </main>
    </div>
  )
}

export default Home
