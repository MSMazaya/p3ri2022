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
import moment from 'moment'
import SponsorAndMedpar from 'components/index/SponsorAndMedpar'
import { getAllSponsorAndMediaPartners } from 'services/sponsorAndMediaPartner'
import { Article } from 'types/article'
import { getArticlesPaginated } from 'services/article'
import { MediaPartner, Sponsor } from 'types/sponsorAndMediaPartner'
import { getAllPhotoDokumentasi } from 'services/photoDokumentasi'
import { PhotoDokumentasi } from 'types/photoDokumentasi'
import Blogs from 'components/index/Blogs'
import Dokumentasi from 'components/index/Dokumentasi'

type Props = {
  faqs: FaqType[];
  events: Event[];
  merches: MerchType[];
  mediaPartners: MediaPartner[];
  sponsors: Sponsor[];
  articles: Article[];
  photoDokumentasis: PhotoDokumentasi[];
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
        {/* Extra checking on frontend since the update from static may only be triggered by webhook */}
        <Events events={
          props.events.filter(
            event => moment(event.waktuAkhirAcara).isSameOrAfter(moment())
          )
        } />
        <InfakSection />
        <Dokumentasi photoDokumentasis={props.photoDokumentasis} />
        <Merch merches={props.merches} />
        <Blogs articles={props.articles} />
        <Tagline />
        <Faq faqs={props.faqs} />
        <SponsorAndMedpar sponsors={props.sponsors} mediaPartners={props.mediaPartners} />
      </React.Fragment>
    </>
  )
}

export async function getStaticProps() {
  const faqs = await getFaqs();
  const events = await getHighlightedJadwal();
  const merches = await getMerchesPaginated(2, 0);
  const { mediaPartners, sponsors } = await getAllSponsorAndMediaPartners();
  const articles = await getArticlesPaginated(8, 0);
  const photoDokumentasis = await getAllPhotoDokumentasi();

  return {
    props: {
      faqs,
      events,
      merches,
      mediaPartners,
      sponsors,
      articles,
      photoDokumentasis
    }
  }
}

export default Home
