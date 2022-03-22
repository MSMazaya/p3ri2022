import React from 'react'

const Headline = () => {
	return (
		<div className="m-16 grid grid-cols-2">
			<div className="flex flex-col gap-4">
				<h1 className="big-title bold text-neutral-1000">
					Official Merch Store P3RI
				</h1>
				<div className="headline medium text-neutral-900">
					Maksimalkan amal ibadah anda dengan berbagai kegiatan dan materi yang bermanfaat bersama P3RI Salman ITB.
				</div>
				<div className="btn-primary w-fit">
					Marketplace P3RI
				</div>
			</div>
			<div className="bg-slate-500 rounded-xl w-[80%] mx-auto"></div>
		</div>
	)
}

export default Headline