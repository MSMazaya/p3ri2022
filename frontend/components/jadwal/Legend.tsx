import React from 'react'

const Legend = () => {
	return (
		<div className="flex gap-10 w-fit pt-10">
			<div className="flex gap-1">
				<div className={`w-[4px] rounded-lg bg-success-hover`}>
				</div>
				<div>
					<b>
						Kegiatan Online
					</b>
				</div>
			</div>
			<div className="flex gap-1">
				<div className={`w-[4px] rounded-lg bg-warning-hover`}>
				</div>
				<div>
					<b>
						Kegiatan Offline
					</b>
				</div>
			</div>
		</div>
	)
}

export default Legend