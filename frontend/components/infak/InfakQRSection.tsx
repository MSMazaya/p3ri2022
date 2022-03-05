import Image from 'next/image'
import React from 'react'
import { BiPaperPlane } from 'react-icons/bi'

const InfakQRSection = () => {
	return (
		<div className="grid grid-cols-2" id="qr">
			<div className="flex flex-col justify-center m-5">
				<div className="mid-title bold text-neutral-1000 mb-10">
					Salurkan infak terbaikmu dengan scan QR Code
				</div>
				<div className="title-3 medium text-neutral-800 mb-20">
					P3RI membantu anda dalam menyalurkan infak, sedekah, dan donasi kepada orang-orang yang membutuhkan.
				</div>
				<div className="text-primary-main bold title-3 flex gap-2 items-center cursor-pointer">
					Konfirmasi Donasi
					<BiPaperPlane />
				</div>
			</div>
			<div className="w-full h-[43.75rem] relative rounded-xl overflow-hidden">
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