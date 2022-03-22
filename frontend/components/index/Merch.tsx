import { DocumentRenderer } from '@keystone-6/document-renderer'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { Merch } from 'types/merch'

type Props = {
	merches: Merch[];
}

const Merch = (props: Props) => {
	return (
		<div className="p-10 justify-around flex">
			<div className="w-fit flex m-5">
				{
					props.merches.map((merch, index) => (
						<MerchCard merch={merch} key={index} />
					))
				}
			</div>
			<div className="flex flex-col justify-around m-5">
				<h2 className="mid-title text-neutral-1000 bold">Merchandise P3RI</h2>
				<div className="title-3 neutral-800 medium">
					Ikut sukseskan keberjalanan P3RI dengan membeli merchandise dan produk kami. Setiap merchandise dibuat dengan semangat untuk memberikan yang terbaik bagi jamaah.
				</div>
				<Link
					href="/merch"
					passHref
				>
					<div className="text-primary-main bold title-3 flex gap-3 group items-center cursor-pointer">
						Catalog Product
						<BiArrowBack className="transform rotate-180 group-hover:animate-bounce-x" />
					</div>
				</Link>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	)
}


type MerchCardProps = {
	merch: Merch;
}

const MerchCard = (props: MerchCardProps) => {
	return (
		<div className="bg-neutral-100 rounded-xl shadow-xl relative overflow-hidden w-[20rem] m-2">
			<div className="flex flex-col gap-2 m-4">
				<div className="title-3 bold text-neutral-900 capitalize">
					{props.merch.name}
				</div>
				<div className="bg-neutral-900 h-80 relative">
					<Image src={props.merch.photo.publicUrl} alt={props.merch.name} layout="fill" objectFit='cover' />
				</div>
				<div className="text-neutral-900 headline bold">
					Rp89.999,-
				</div>
				<div className="body-1 text-neutral-800 medium clamp-elipsis-3">
					<DocumentRenderer document={props.merch.description.document} />
				</div>
				<a href={props.merch.productUrl} className="bottom-0 btn-primary block text-center">Beli di Marketplace</a>
			</div>
		</div>
	)
}

export default Merch