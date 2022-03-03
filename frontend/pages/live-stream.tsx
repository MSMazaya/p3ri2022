import Image from 'next/image'
import React from 'react'

const LiveStream = () => {
	return (
		<div className="m-5 grid grid-cols-4">
			<div className="col-span-3 m-5 flex flex-col gap-3">
				<div className="aspect-w-16 aspect-h-9">
					<iframe
						frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						src="https://www.youtube.com/embed/gbEAGm48YNo"
						allowFullScreen
					>
					</iframe>
				</div>

				<div className="title-1 bold">
					Pelatihan Penyembelihan Halal Hewan Qurban Di Masa Pandemi
				</div>
				<div className="sub-headline medium text-neutral-700">
					16 Feb 2022 - Webinar P3RI
				</div>
			</div>
			<div className="flex flex-col gap-2">
				<div className="headline bold text-neutral-1000">
					Video Lainnya
				</div>
				<div className="flex gap-2 cursor-pointer">
					<Image src="https://i.ytimg.com/vi/gbEAGm48YNo/default.jpg" alt="test" width="120" height="90" />
					<div>
						<div className="text-neutral-900 body-1 bold">
							Kajian Ilmiah : Teknologi dan Islam
						</div>
						<div className="text-neutral-700 caption medium">
							2 Apr 2022 12:00 WIB
						</div>
					</div>
				</div>
			</div>

		</div>
	)
}

export default LiveStream