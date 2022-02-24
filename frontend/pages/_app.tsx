import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from 'components/shared/Layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => (url !== router.asPath) && setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  })
  return <>
    <Head>
      <title>P3RI Salman ITB</title>
      <meta name="description" content="" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {
      loading
        ?
        <h1>Loading</h1>
        :
        <Layout>
          <Component {...pageProps} />
        </Layout>
    }
  </>
}

export default MyApp
