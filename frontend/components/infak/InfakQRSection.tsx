import Image from 'next/image'
import React from 'react'
import { BiArrowBack } from 'react-icons/bi'

const InfakQRSection = () => {
	return (
		<div className="grid grid-cols-2">
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
			<div className="w-full h-[43.75rem] relative">
				<Image
					src="https://res.cloudinary.com/dw4bwn79m/image/upload/v1646283150/image_1_tsikop.png"
					alt="Picture of the author"
					layout="fill"
					objectFit="cover"
				/>
			</div>
		</div>
	)
}

export default InfakQRSection