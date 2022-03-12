import Image from 'next/image'
import React from 'react'

const Tagline = () => {
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

export default Tagline