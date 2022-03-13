import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 md:p-16 bg-main min-h-screen items-center justify-center p-10">
			<div className="flex flex-col gap-10 p-8">
				<div className="big-title bold text-white">
					Ramadhan dan Idul Adha bersama P3RI
				</div>
				<div className="headline text-neutral-600 text-3xl md:text-lg">
					Maksimalkan amal ibadah anda dengan berbagai kegiatan dan materi yang bermanfaat bersama P3RI Salman ITB.
				</div>
				<div className="flex md:flex-row flex-col md:text-start text-center gap-5 md:text-base text-3xl">
					<Link
						href="/jadwal"
						passHref
					>
						<div className="btn-primary md:py-2 md:rounded-md py-4 rounded-xl">
							Lihat Jadwal
						</div>
					</Link>
					<Link
						href="/infak"
						passHref
					>
						<div className="px-8 md:py-2 bg-transparent text-white md:rounded-md border-[1px] border-white cursor-pointer py-4 rounded-xl">
							Infak & Zakat
						</div>
					</Link>
				</div>
			</div>
			<div className="w-full h-full md:p-12 pb-12">
				<div className="m-5 w-full h-full relative">
					<Image layout="fill" className="w-full h-full object-cover " src="https://res.cloudinary.com/dw4bwn79m/image/upload/v1645656846/Group_1_a0c0hu.png" alt="Hero Img" objectFit="contain" />
				</div>
			</div>
		</div>
	)
}

export default Hero
