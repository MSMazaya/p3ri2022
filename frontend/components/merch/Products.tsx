import Image from 'next/image'
import React from 'react'

const Products = () => {
	return (
		<div className="m-16">
			<div className="mid-title bold text-center p-5 text-neutral-1000">
				Our Products
			</div>
			<div className="grid grid-cols-3 gap-10 w-full">
				<ProductItem />
				<ProductItem />
				<ProductItem />
			</div>
		</div>
	)
}

const ProductItem = () => {
	return (
		<div className="w-full relative ">
			<div className="h-80 relative rounded-xl overflow-hidden">
				<Image
					src="https://res.cloudinary.com/dw4bwn79m/image/upload/v1646283150/image_1_tsikop.png"
					alt="Picture of the author"
					layout="fill"
					objectFit="cover"
				/>
			</div>
			<div className="headline bold text-neutral-1000 text-center">
				Hoodie
			</div>
		</div>
	)
}


export default Products