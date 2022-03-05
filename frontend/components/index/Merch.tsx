import React from 'react'
import { BiArrowBack } from 'react-icons/bi'

const Merch = () => {
	return (
		<div className="p-10 justify-around flex mt-10">
			<div className="w-fit flex m-5">
				<MerchCard />
				<MerchCard />
			</div>
			<div className="flex flex-col justify-around m-5">
				<div className="mid-title text-neutral-1000 bold">Merchandise P3RI</div>
				<div className="title-3 neutral-800 medium">
					Ikut sukseskan keberjalanan P3RI dengan membeli merchandise dan produk kami. Setiap merchandise dibuat dengan semangat untuk memberikan yang terbaik bagi jamaah.
				</div>
				<div className="text-primary-main bold title-3 flex gap-3">
					Catalog Product
					<BiArrowBack />
				</div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	)
}


const MerchCard = () => {
	return (
		<div className="bg-neutral-100 rounded-xl shadow-xl relative overflow-hidden w-[20rem] m-2">
			<div className="flex flex-col gap-2 m-4">
				<div className="title-3 bold text-neutral-900 capitalize">
					Tumblr P3RI
				</div>
				<div className="bg-neutral-900 h-80"></div>
				<div className="text-neutral-900 headline bold">
					Rp89.999,-
				</div>
				<div className="body-1 text-neutral-800 medium">
					Tumblr untuk menemani harimu. Berkapasitas 1.5 L, tahan panas dan dingin serta tahan lama.
				</div>
				<div className="btn-primary block text-center">Beli di Marketplace</div>
			</div>
		</div>
	)
}

export default Merch