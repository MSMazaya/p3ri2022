import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { BiArrowBack } from "react-icons/bi";
import { Event } from 'types/jadwal';
import { useInterval } from 'ahooks';

type Props = {
	events: Event[];
}

const Events = (props: Props) => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const scrollRef = React.useRef(null)
	const [inUserClickedInterval, setInUserClickedInterval] = useState(false);

	useInterval(() => {
		if (!inUserClickedInterval) {
			if (selectedIndex < props.events.length - 1) {
				select(selectedIndex + 1);
			} else {
				select(0);
			}
		}
	}, 5000)

	const select = (index: number) => {
		const { left } = document.getElementById(`${index}-scrollTo`).getBoundingClientRect();
		scrollRef.current.scrollTo({
			top: 0,
			left: index ? left : 0,
			behavior: 'smooth',
		})
		setSelectedIndex(index);
	}

	return (
		<>
			<div className="p-10 grid grid-cols-2 relative my-10">
				<div className="flex flex-col gap-10 m-10">
					<div className="mid-title bold text-neutral-1000">
						Banyak kegiatan yang kami buat, spesial untuk Anda
					</div>
					<div className="text-neutral-800 title-3 font-medium">
						Event-event webinar, kajian, buka bersama dan banyak lagi lainnya kami buat untuk pengalaman di bulan Ramadhan dan Idul Adha yang terbaik untuk kita semua. InsyaAllah
					</div>
					<Link
						href="/jadwal"
						passHref
					>
						<div className="text-primary-main bold title-3 flex items-center gap-2 cursor-pointer group py-5">
							Jadwal Lengkap
							<BiArrowBack className="transform rotate-180 group-hover:animate-bounce-x" />
						</div>
					</Link>
				</div>
				<div className="overflow-x-scroll no-scrollbar" ref={scrollRef}>
					<div className="w-fit overflow-x-hidden flex gap-3 pb-4">
						{
							props.events.map((event, index) => (<>
								<EventCard event={event} />
								<div id={`${index}-scrollTo`} />
							</>))
						}
						<div className="absolute right-[15%] bottom-[4%] flex gap-3 select-none">
							{
								props.events.map((_, index) =>
									<div
										className={`bg-neutral-600 ${index === selectedIndex ? "" : "opacity-50"} rounded-xl p-2 shadow-xl cursor-pointer`}
										key={index}
										onClick={() => {
											setInUserClickedInterval(true);
											select(index);
											setTimeout(() => {
												setInUserClickedInterval(false);
											}, 5000)
										}}
									></div>
								)
							}
						</div>
					</div>
				</div>
			</div>
			<style jsx>{`
				.no-scrollbar::-webkit-scrollbar {
					display: none;
				}
			`}
			</style>
		</>
	)
}


type CardProps = {
	event: Event;
}

const EventCard = (props: CardProps) => {
	return (
		<div className="bg-neutral-100 rounded-xl drop-shadow-md relative overflow-hidden w-[30rem] m-2" >
			<div className="h-2 w-full bg-success-main absolute top-[-3px] left-0" />
			<div className="flex gap-2">
				<div className="rounded-xl bg-success-main bold headline text-center text-success-surface h-fit px-8 py-5 m-4">
					{moment(props.event.waktuAwalAcara).format("DD MMM").split(" ").map((word, idx) => (
						<div key={idx}>{word}</div>
					))}
				</div>
				<div className="flex flex-col gap-2 m-4">
					<div className="title-2 bold text-neutral-1000 capitalize">
						{props.event.namaKegiatan}
					</div>
					<div className="sub-headline font-medium text-neutral-800">
						{props.event.shortDescription}
					</div>
					<div className="flex gap-3">
						{
							props.event.tags.map(({ name }, idx) => (
								<div
									className="rounded-xl bg-success-surface text-success-main caption font-medium px-4 py-2 border-success-border border-[1px]"
									key={idx}
								>
									{name}
								</div>
							))
						}
					</div>
					<div className="h-80 w-full relative" >
						<Image src={props.event.thumbnail.publicUrl} alt={props.event.namaKegiatan} layout="fill" objectFit="cover" />
					</div>
					<div className="btn-primary block text-center">Add to Google Calendar</div>
				</div>
			</div>
		</div>
	)
}

export default Events