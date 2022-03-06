import React from 'react'

const Headline = () => {
	return (
		<div className="m-16 grid grid-cols-2">
			<div className="flex flex-col gap-4">
				<div className="mid-title bold text-neutral-1000">
					Nyalakan Semangat Kebaikan bersama P3RI
				</div>
				<div className="headline medium text-neutral-800">
					P3RI 1443 H menargetkan lebih dari 120.000 penerima manfaat kepada semua kalangan masyarakat. Mari jadi bagian nyala lentera inspirasi dengan menjadi sponsor kami.
				</div>
				<div className="btn-primary w-fit">
					Hubungi Kami
				</div>
			</div>
			<div className="bg-slate-500 rounded-xl w-[80%] mx-auto"></div>
		</div>
	)
}

export default Headline;