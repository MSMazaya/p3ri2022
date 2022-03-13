import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from 'components/shared/Layout';
import Head from 'next/head';
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import { AnimatePresence } from 'framer-motion'
import NextNProgress from 'nextjs-progressbar';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Script
      strategy='lazyOnload'
      id="gtag-cdn"
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
    />
    <Script
      strategy='lazyOnload'
      id="gtag-script"
    >
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
      `}
    </Script>

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
