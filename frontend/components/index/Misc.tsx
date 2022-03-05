import Image from 'next/image'
import React from 'react'

const Misc = () => {
	return (
		<div className="mt-20">
			<div className="text-center text-neutral-1000 mid-title bold">Beramal di Bulan Suci, Bersama P3RI</div>
			<div className="text-center text-neutral-800 sub-headline medium">P3RI membantu anda dalam menyalurkan infak, sedekah, dan donasi kepada orang-orang yang membutuhkan.</div>
			<div className="m-5 flex justify-center align center ">
				<MiscCard />
				<MiscCard />
				<MiscCard />
				<MiscCard />
			</div>
			<TagLine />
		</div>
	)
}

const MiscCard = () => {
	return (
		<div className="bg-neutral-100 rounded-xl shadow-xl relative p-3 overflow-hidden w-[20rem] m-2 flex flex-col gap-4">
			<div className="bg-neutral-900 h-60"></div>
			<div className="text-neutral-1000 headline bold">Sponsori kegiatan kami</div>
			<div className="text-neutral-800 body-1 medium">Dengan mensponsori kegiatan kami, perusahaan anda ikut membantu melayani jamaah Salman ITB.</div>
		</div>
	)
}

const TagLine = () => {
	return (
		<div className="bg-[#237D9F] w-full flex items-stretch mt-32">
			<Image width="736" height="400" src="https://res.cloudinary.com/dw4bwn79m/image/upload/v1646225192/Stock_Visual_1_va3hgo.png" alt="tagline image" />
			<div className="flex align-center items-center">
				<div className="text-neutral-100 title-1 bold p-5">
					Jadikan Ramadhan 1443 H penuh makna dan inspirasi.
				</div>
			</div>
			<div className="flex align-center items-center bg-[#113C4D] p-5">
				<Image src="https://res.cloudinary.com/dw4bwn79m/image/upload/v1646228910/Vector_j7ct2o.png" alt="logo p3ri" height="50" width="50" />
			</div>

		</div>
	)
}


export default Misc