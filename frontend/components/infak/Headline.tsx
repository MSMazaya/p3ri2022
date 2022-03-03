import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import HeadlineCounterCard from './HeadlineCounterCard'

const Headline = () => {
	return (
		<div className="grid grid-cols-2">
			<div className="grid grid-cols-2 gap-y-4">
				<HeadlineCounterCard />
				<HeadlineCounterCard />
				<HeadlineCounterCard />
				<HeadlineCounterCard />
			</div>
			<div className="flex flex-col justify-center m-5">
				<div className="mid-title bold text-neutral-1000 mb-5">
					Bersama, Bermanfaat
				</div>
				<div className="title-3 medium text-neutral-800 mb-10">
					Infak yang anda berikan berdampak besar bagi penerimanya. Mari ikut tebarkan semangat bermanfaat bersama P3RI.
				</div>
				<div className="text-primary-main bold title-3 flex gap-2 items-center">
					Jadwal Lengkap
					<BiArrowBack />
				</div>
			</div>
		</div>
	)
}

export default Headline