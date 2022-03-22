import Image from 'next/image'
import React from 'react'

const Quote = () => {
	return (
		<div className="m-16 grid grid-cols-2">
			{/* <div className="h-60 relative rounded-xl overflow-hidden">
				<Image
					src="https://res.cloudinary.com/dw4bwn79m/image/upload/v1646283150/image_1_tsikop.png"
					alt="Picture of the author"
					layout="fill"
					objectFit="cover"
				/>
			</div> */}
			<div className="bg-slate-500 rounded-xl w-[80%] h-80 "></div>
			<h2 className="text-neutral-1000 title-1 italic flex items-center">
				Merchandise untuk menemanimu di bulan suci
			</h2>
		</div>
	)
}

export default Quote