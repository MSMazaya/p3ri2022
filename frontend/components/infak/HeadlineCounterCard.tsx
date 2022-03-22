import Image from 'next/image'
import React from 'react'

const HeadlineCounterCard = () => {
	return (
		<div className="relative rounded-xl overflow-hidden h-48 w-72">
			<Image
				src="https://res.cloudinary.com/dw4bwn79m/image/upload/v1646225192/Stock_Visual_1_va3hgo.png"
				alt="Picture of the author"
				layout="fill"
				objectFit="cover"
			/>
			<div className="overlay-counter-card-bg absolute z-10 h-full w-full left-0 top-0" />
			<div className="absolute bottom-2 left-2 z-20 text-neutral-100 ">
				<h2 className="body-1 bold">Sembako dan Bantuan</h2>
				<div className="flex gap-2 items-end">
					<div className="mid-title bold">1.231</div>
					<div className="[line-height:2.5rem;]">Paket</div>
				</div>
			</div>
		</div>
	)
}

export default HeadlineCounterCard