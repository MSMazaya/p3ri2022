import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import HeadlineCounterCard from './HeadlineCounterCard'

const Headline = () => {
	return (
		<div className="grid grid-cols-2 m-5">
			<div className="grid grid-cols-2 gap-y-4">
				<HeadlineCounterCard />
				<HeadlineCounterCard />
				<HeadlineCounterCard />
				<HeadlineCounterCard />
			</div>
			<div className="flex flex-col justify-center m-5">
				<h1 className="mid-title bold text-neutral-1000 mb-5">
					Bersama, Bermanfaat
				</h1>
				<div className="title-3 medium text-neutral-800 mb-10">
					Infak yang anda berikan berdampak besar bagi penerimanya. Mari ikut tebarkan semangat bermanfaat bersama P3RI.
				</div>
				<a className="text-primary-main bold title-3 flex gap-2 items-center group" href="#qr">
					Scan QR
					<BiArrowBack className="transform rotate-[-90deg] group-hover:animate-bounce-y-rotate-min-90" />
				</a>
			</div>
		</div>
	)
}

export default Headline