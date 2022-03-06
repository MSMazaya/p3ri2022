import { CalendarIcon, DownloadIcon } from '@heroicons/react/outline'
import React from 'react'

const CalendarButton = () => {
	return (
		<div className="absolute top-0 right-0 flex flex-col gap-2">
			<div className="btn-primary text-sm flex gap-2">
				<CalendarIcon className="h-5" />
				Add to Google Calendar
			</div>
			<div className="border-2 border-primary-main text-sm p-1 rounded-md text-center text-primary-main bold cursor-pointer flex justify-center gap-2 select-none">
				<DownloadIcon className="h-5" />
				Download Imsakiyah
			</div>
		</div>
	)
}

export default CalendarButton