import Dokumentasi from 'components/index/Dokumentasi'
import SponsorAndMedpar from 'components/index/SponsorAndMedpar'
import Headline from 'components/sponsor/Headline'
import TahunLaluDiP3RI from 'components/sponsor/TahunLaluDiP3RI'
import Head from 'next/head'
import React from 'react'
import { getAllPhotoDokumentasi } from 'services/photoDokumentasi'
import { getAllSponsorAndMediaPartners } from 'services/sponsorAndMediaPartner'
import { PhotoDokumentasi } from 'types/photoDokumentasi'
import { MediaPartner, Sponsor } from 'types/sponsorAndMediaPartner'

type Props = {
	photoDokumentasis: PhotoDokumentasi[];
	sponsors: Sponsor[];
	mediaPartners: MediaPartner[];
}

const Sponsor = (props: Props) => {
	return (
		<React.Fragment>
			<Head>
				<title>P3RI Salman ITB | Sponsor</title>
				<meta name="description" content="P3RI 1443 H menargetkan lebih dari 120.000 penerima manfaat kepada semua kalangan masyarakat. Mari jadi bagian nyala lentera inspirasi dengan menjadi sponsor kami" />
			</Head>
			<div className="m-5 flex flex-col gap-32 mt-32">
				<Headline />
				<SponsorAndMedpar sponsors={props.sponsors} mediaPartners={props.mediaPartners} />
				<TahunLaluDiP3RI />
				<Dokumentasi photoDokumentasis={props.photoDokumentasis} />
			</div>
		</React.Fragment>
	)
}

export async function getStaticProps() {
	const { mediaPartners, sponsors } = await getAllSponsorAndMediaPartners();
	const photoDokumentasis = await getAllPhotoDokumentasi();

	return {
		props: {
			mediaPartners,
			sponsors,
			photoDokumentasis
		}
	}
}

export default Sponsor