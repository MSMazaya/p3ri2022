import React from 'react'
import HeadlineCounterCard from 'components/infak/HeadlineCounterCard'

const TahunLaluDiP3RI = () => {
	return (
		<div className="grid grid-cols-2 m-10 gap-20">
			<div className="flex flex-col justify-center m-5">
				<h2 className="mid-title bold text-neutral-1000 mb-5">
					Tahun Lalu di P3RI
				</h2>
				<div className="title-3 medium text-neutral-800 mb-10 text-justify">
					Puluhan ribu total paket berbagi buka, qurban, sembako dan bantuan telah di bagikan di P3RI 1442 H. Tahun ini, kami mengajak anda menjadi bagian dari semangat berbagi tersebut.
				</div>
			</div>
			<div className="grid grid-cols-2 gap-y-4">
				<HeadlineCounterCard />
				<HeadlineCounterCard />
				<HeadlineCounterCard />
				<HeadlineCounterCard />
			</div>
		</div>
	)
}

export default TahunLaluDiP3RI