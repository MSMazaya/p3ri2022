import Image from 'next/image'
import React from 'react'
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import Link from 'next/link';

const Footer = () => {
	return (
		<div className="bg-primary-pressed p-10 mt-32">
			<div className="flex md:flex-row flex-col justify-center md:justify-between items-center md:items-start">
				<div className="flex gap-10 md:gap-2 md:p-0 p-5">
					<div className="md:p-5">
						<Image src="https://res.cloudinary.com/dw4bwn79m/image/upload/v1646228910/Vector_j7ct2o.png" alt="logo p3ri" height="50" width="50" />
					</div>
					<div>
						<div className="headline bold text-neutral-100 flex flex-col">
							<span>
								Panitia Pelaksana Program
							</span>
							<span>
								Ramadhan dan Idul Adha
							</span>
							<span>
								1443 H
							</span>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-2 md:grid-cols-3 md:gap-5 gap-y-10 md:gap-y-0 text-neutral-100 w-full md:w-auto">
					<div className="flex flex-col">
						<div className="headline bold">Tentang Kami</div>
						<Link href="/about" passHref>
							<div className="body-1 medium cursor-pointer">Kepanitiaan</div>
						</Link>
						<Link href="/blog" passHref>
							<div className="body-1 medium cursor-pointer">Blog</div>
						</Link>
					</div>
					<div className="flex flex-col">
						<div className="headline bold">Hubungi Kami</div>
						<a href="#" className="body-1 medium">Kontak</a>
						<a href="#" className="body-1 medium">Bantuan</a>
					</div>
					<div className="flex flex-col md:col-span-1 col-span-2">
						<div className="headline bold">Bekerja sama dengan</div>
						<div className="flex">
							<div className="p-5">
								<Image src="https://res.cloudinary.com/dw4bwn79m/image/upload/v1646253311/BMKA_Salman_Logo_1_szghrs.png" alt="logo bmka" height="50" width="60" />
							</div>
							<div className="p-5">
								<Image src="https://res.cloudinary.com/dw4bwn79m/image/upload/v1646253312/YPM_Salman_Logo_1_olfmws.png" alt="logo ypm salman" height="50" width="100" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center justify-center">
				<div className="flex gap-5 text-neutral-100 text-3xl my-4">
					<a href="https://www.instagram.com/p3ri.salmanitb/?hl=en">
						<AiFillInstagram />
					</a>
					<a href="https://www.youtube.com/channel/UC0q3ZRelHNhWRhwe2thGzWQ">
						<BsYoutube />
					</a>
					<a href="https://www.tiktok.com/@p3ri.salmanitb?lang=en">
						<FaTiktok />
					</a>
				</div>
				<div className="caption bold text-neutral-100">
					P3RI 1443H. All rights resevered. 2022
				</div>
			</div>
		</div>
	)
}

export default Footer