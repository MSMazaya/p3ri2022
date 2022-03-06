import Image from 'next/image'
import React from 'react'
import { Merch } from 'types/merch'

type Props = {
	merches: Merch[];
}

const Products = (props: Props) => {
	return (
		<div className="m-16">
			<div className="mid-title bold text-center p-5 text-neutral-1000">
				Our Products
			</div>
			<div className="grid grid-cols-3 gap-10 w-full">
				{props.merches.map((merch: Merch, index) => (
					<ProductItem merch={merch} key={index} />
				))}
			</div>
		</div>
	)
}

type ItemProps = {
	merch: Merch;
}

const ProductItem = (props: ItemProps) => {
	return (
		<div className="w-full relative ">
			<div className="h-80 relative rounded-xl overflow-hidden">
				<Image
					src={props.merch.photo.publicUrl}
					alt={props.merch.name}
					layout="fill"
					objectFit="cover"
				/>
			</div>
			<div className="headline bold text-neutral-1000 text-center">
				{props.merch.name}
			</div>
		</div>
	)
}


export default Products