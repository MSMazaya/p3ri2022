import React from 'react'

const VideoHighlighted = () => {
	return (
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
	)
}

export default VideoHighlighted