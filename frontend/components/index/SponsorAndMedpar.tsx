import Image from 'next/image';
import React from 'react'
import { MediaPartner, Sponsor } from 'types/sponsorAndMediaPartner';

type Props = {
	sponsors: Sponsor[];
	mediaPartners: MediaPartner[];
}

const SponsorAndMedpar = (props: Props) => {
	return (
		<div className="p-10 text-center flex flex-col gap-4">
			<div className="title-2 bold text-neutral-1000">Disponsori Oleh</div>
			<div className="grid grid-cols-5 gap-2">
				{
					props.sponsors.map(sponsor => (<>
						<div className="h-40 relative">
							<Image src={sponsor.logo.publicUrl} alt={sponsor.name} layout="fill" objectFit='contain' />
						</div>
					</>))
				}
			</div>
			<div className="title-2 bold text-neutral-1000">Media Partner</div>
			<div className="grid grid-cols-10 gap-2">
				{
					props.mediaPartners.map(mediaPartner => (<>
						<div className="h-20 relative">
							<Image src={mediaPartner.logo.publicUrl} alt={mediaPartner.name} layout="fill" objectFit='contain' />
						</div>
					</>))
				}
			</div>
		</div>
	)
}

export default SponsorAndMedpar