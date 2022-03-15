import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from 'components/index/Hero'
import Events from 'components/index/Events'
import Merch from 'components/index/Merch'
import React, { ReactNode } from 'react'
import Faq from 'components/index/Faq'
import { getFaqs } from 'services/faq'
import { Faq as FaqType } from 'types/faq'
import { getHighlightedJadwal } from 'services/jadwal'
import { Event } from 'types/jadwal'
import { getMerchesPaginated } from 'services/merch'
import { Merch as MerchType } from 'types/merch'
import InfakSection from 'components/index/InfakSection'
import Tagline from 'components/index/Tagline'

type Props = {
  faqs: FaqType[];
  events: Event[];
  merches: MerchType[];
  children?: ReactNode
}

const Home: NextPage = (props: Props) => {
  return (
    <>
      <Head>
        <title>P3RI Salman ITB</title>
        <meta name="description" content="Maksimalkan amal ibadah anda dengan berbagai kegiatan dan materi yang bermanfaat bersama P3RI Salman ITB" />
      </Head>
      <React.Fragment>
        <Hero />
        <Events events={props.events} />
        <InfakSection />
        <Merch merches={props.merches} />
        <Tagline />
        <Faq faqs={props.faqs} />
      </React.Fragment>
    </>
  )
}

export async function getServerSideProps() {
  const faqs = await getFaqs();
  const events = await getHighlightedJadwal();
  const merches = await getMerchesPaginated(2, 0);

  return {
    props: {
      faqs,
      events,
      merches
    }
  }
}

export default Home
