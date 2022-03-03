import React from 'react'

const Misc = () => {
	return (
		<div className="m-5 flex justify-center align center ">
			<MiscCard />
			<MiscCard />
			<MiscCard />
			<MiscCard />
		</div>
	)
}

const MiscCard = () => {
	return (
		<div className="bg-neutral-100 rounded-xl shadow-xl relative p-3 overflow-hidden w-[20rem] m-2 flex flex-col gap-4">
			<div className="bg-neutral-900 h-60"></div>
			<div className="text-neutral-1000 headline bold">Sponsori kegiatan kami</div>
			<div className="text-neutral-800 body-1 medium">Dengan mensponsori kegiatan kami, perusahaan anda ikut membantu melayani jamaah Salman ITB.</div>
		</div>
	)
}

export default Misc