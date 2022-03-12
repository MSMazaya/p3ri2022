import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from 'components/shared/Layout';
import Head from 'next/head';
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import { AnimatePresence } from 'framer-motion'
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta name="keywords" content="p3ri, salmanitb, ramadhan" />
    </Head>
    <AnimatePresence
      exitBeforeEnter
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <NextNProgress
        color="#29D"
        height={3}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>
  </>
}

export default MyApp
