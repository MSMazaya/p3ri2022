import Image from 'next/image'
import React from 'react'

const Hero = () => {
	return (
		<div className="grid grid-cols-2 p-16 bg-main">
			<div className="flex flex-col gap-10 p-8">
				<div className="big-title bold text-white">
					Ramadhan dan Idul Adha bersama P3RI
				</div>
				<div className="headline text-neutral-600 text-lg">
					Maksimalkan amal ibadah anda dengan berbagai kegiatan dan materi yang bermanfaat bersama P3RI Salman ITB.
				</div>
				<div className="flex gap-5">
					<div className="btn-primary">
						Lihat Jadwal
					</div>
					<div className="px-8 py-2 bg-transparent text-white rounded-md border-[1px] border-white cursor-pointer">
						Infak & Zakat
					</div>
				</div>
			</div>
			<div className="w-full h-full p-12">
				<div className="m-5 w-full h-full relative">
					<Image layout="fill" className="w-full h-full object-cover " src="https://res.cloudinary.com/dw4bwn79m/image/upload/v1645656846/Group_1_a0c0hu.png" alt="Hero Img" objectFit="contain" />
				</div>
			</div>
		</div>
	)
}

export default Hero
