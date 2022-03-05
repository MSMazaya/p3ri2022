import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from 'components/index/Hero'
import Events from 'components/index/Events'
import Merch from 'components/index/Merch'
import React, { ReactNode } from 'react'
import Misc from 'components/index/Misc'
import Faq from 'components/index/Faq'
import { getFaqs } from 'services/faq'
import { Faq as FaqType } from 'types/faq'

type Props = {
  faqs: FaqType[];
  children?: ReactNode
}

const Home: NextPage = (props: Props) => {
  return (
    <>
      <Head>

      </Head>
      <React.Fragment>
        <Hero />
        <Events />
        <Merch />
        <Misc />
        <Faq faqs={props.faqs} />
      </React.Fragment>
    </>
  )
}

export async function getStaticProps() {
  const faqs = await getFaqs();

  return {
    props: {
      faqs
    }
  }
}

export default Home
