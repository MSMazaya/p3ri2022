import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const toCardData = (image: string, title: string, description: string, href: string) => ({ image, title, description, href })

const cardData = [
	toCardData("https://res.cloudinary.com/dw4bwn79m/image/upload/v1647078787/unsplash_R6rh5ttDO-4_qa4j8u.png", "Sponsori kegiatan kami", "Dengan mensponsori kegiatan kami, perusahaan anda ikut membantu melayani jamaah Salman ITB.", "/sponsor"),
	toCardData("https://res.cloudinary.com/dw4bwn79m/image/upload/v1647078788/unsplash_Dt1vFAPZmUI_gerk7j.png", "Alirkan kebaikan wakaf", "Berbeda dengan sedekah, dengan kebermanfaatan wakaf terus mengalir meski wakif (orang yang berwakaf) telah meninggal dunia.", "/infak"),
	toCardData("https://res.cloudinary.com/dw4bwn79m/image/upload/v1647078789/unsplash_GClYQv8I3So_nwowqu.png", "Salurkan zakatmu disini", "Harta kita tidak sepenuhnya milik kita, ada zakat yang harus kita salurkan. Mudah bayar zakat, sangat dekat.", "/infak"),
	toCardData("https://res.cloudinary.com/dw4bwn79m/image/upload/v1647078789/unsplash_0EBnTRiIuLE_zx0vwq.png", "Berbagi paket buka puasa", "Setiap tahunnya ratusan orang baik berbagi ribuan paket berbuka. Apakah kamu salah satu dari orang baik tersebut?", "/infak"),
]

const InfakSection = () => {
	return (
		<div className="p-10 my-32">
			<div className="text-center text-neutral-1000 mid-title bold">Beramal di Bulan Suci, Bersama P3RI</div>
			<div className="text-center text-neutral-800 sub-headline medium">P3RI membantu anda dalam menyalurkan infak, sedekah, dan donasi kepada orang-orang yang membutuhkan.</div>
			<div className="m-5 flex justify-center align center ">
				{
					cardData.map((data, index) => (
						<InfakSectionCard {...data} key={index} />
					))
				}
			</div>
		</div>
	)
}

type CardProps = {
	image: string;
	title: string;
	description: string;
	href: string;
}

const InfakSectionCard = (props: CardProps) => {
	return (
		<Link passHref href={props.href} >
			<div className="bg-neutral-100 rounded-xl shadow-xl relative p-3 overflow-hidden w-[20rem] m-2 flex flex-col gap-4 cursor-pointer hover:translate-y-[-0.5rem] transition-all">
				<div className="h-60 relative w-full">
					<Image src={props.image} alt={props.title} layout="fill" objectFit="cover" />
				</div>
				<div className="text-neutral-1000 headline bold">{props.title}</div>
				<div className="text-neutral-800 body-1 medium">{props.description}</div>
			</div>
		</Link >
	)
}

export default InfakSection