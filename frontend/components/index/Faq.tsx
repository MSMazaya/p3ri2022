import React from 'react'
import { BiChevronDown } from 'react-icons/bi';

const Faq = () => {
	return (
		<div className="p-5 mt-10">
			<div className="mid-title bold text-neutral-1000 text-center p-5">F.A.Q</div>
			<div className="border-[1px] border-neutral-400 rounded-xl overflow-hidden">
				<Accordion />
				<Accordion />
			</div>
		</div>
	)
}

const Accordion = () => {
	const [open, setOpen] = React.useState(false);
	const toggle = () => setOpen(!open);

	return (
		<div onClick={toggle} className="bg-neutral-300 p-5 cursor-pointer border-[1px] border-neutral-400 transition-all select-none">
			<div className="title-3 bold text-neutral-1000 flex justify-between">
				Apa itu P3RI
				<BiChevronDown className={open ? "transform rotate-180" : ""} />
			</div>
			{
				open &&
				<div className="sub-headline font-medium text-neutral-900 py-5">
					Semua kalangan bisa mengikutin kegiatan P3RI, sedangkan untuk mendaftar sebagai panitia dapat mengecek sosial media P3RI.
				</div>
			}
		</div>
	)
}

export default Faq