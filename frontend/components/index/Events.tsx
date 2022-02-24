import React from 'react'
import { BiArrowBack } from "react-icons/bi";


const Events = () => {
	return (
		<div className="p-10 grid grid-cols-2">
			<div className="flex flex-col gap-5 m-10">
				<div className="mid-title bold text-neutral-1000">
					Banyak kegiatan yang kami buat, spesial untuk Anda
				</div>
				<div className="text-neutral-800 title-3 font-medium">
					Event-event webinar, kajian, buka bersama dan banyak lagi lainnya kami buat untuk pengalaman di bulan Ramadhan dan Idul Adha yang terbaik untuk kita semua. InsyaAllah
				</div>
				<div className="text-primary-main bold title-3">
					Jadwal Lengkap
					<BiArrowBack />
				</div>
			</div>
			<div className="w-full overflow-x-scroll flex gap-3">
				<EventCard />
				<EventCard />
			</div>
		</div>
	)
}


const EventCard = () => {
	return (
		<div className="bg-neutral-100 rounded-xl shadow-xl relative overflow-hidden w-[30rem] m-2">
			<div className="h-2 w-full bg-success-main absolute top-[-3px] left-0" />
			<div className="flex gap-2">
				<div className="rounded-xl bg-success-main bold headline text-center text-success-surface h-fit px-8 py-5 m-4">
					16 Jan
				</div>
				<div className="flex flex-col gap-2 m-4">
					<div className="title-2 bold text-neutral-1000 capitalize">
						ini event yang mau di highlight
					</div>
					<div className="sub-headline font-medium text-neutral-800">
						Isi penjelasan eventnya kaya jadwal, kapan dan tanggal, dimana pake platform apa siapa yang bisa ikut online atau offline dan linknya.
					</div>
					<div className="flex gap-3">
						<div className="rounded-xl bg-success-surface text-success-main caption font-medium px-4 py-2 border-success-border border-[1px]">
							Kajian
						</div>
					</div>
					<div className="h-80 w-full bg-gray-500" />
					<div className="btn-primary block text-center">Add to Google Calendar</div>
				</div>
			</div>
		</div>
	)
}

export default Events