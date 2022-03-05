import React from 'react'
import FullCalendar from "@fullcalendar/react";
// The import order DOES MATTER here. If you change it, you'll get an error!
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from '@fullcalendar/daygrid';




const Jadwal = () => {

	return (
		<div className="m-5 mt-32">
			<FullCalendar
				initialView='dayGridMonth'
				plugins={[timeGridPlugin, interactionPlugin, dayGridPlugin]}
			/>
		</div>
	)
}

export default Jadwal