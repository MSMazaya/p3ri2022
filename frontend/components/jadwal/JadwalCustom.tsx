import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from '@fullcalendar/daygrid';
import moment from 'moment';
import { Event } from "types/jadwal";

type Props = {
	events: Event[];
	setModalEvent: (event: Event) => void;
	setOpenModal: (value: boolean) => void;
}

export default function JadwalCustom(props: Props) {
	return (
		<FullCalendar
			initialView='dayGridMonth'
			plugins={[timeGridPlugin, interactionPlugin, dayGridPlugin]}
			events={props.events.map(e => ({
				backgroundColor: e.jenisKegiatan === "offline" ? "#387a5a" : "#BD8A26",
				borderColor: e.jenisKegiatan === "offline" ? "#3e8361" : "#ca962f",
				title: e?.namaKegiatan,
				start: e?.waktuAwalAcara,
				end: e?.waktuAkhirAcara,
				openModal: () => {
					props.setOpenModal(true);
					props.setModalEvent(e);
				}
			}))} eventContent={RenderEventContent} />
	);
}

const isEventOneDay = (start, end) => {
	return start.getDate() === end.getDate() &&
		start.getMonth() === end.getMonth() &&
		start.getFullYear() === end.getFullYear();
}

function RenderEventContent(eventInfo) {

	return (
		<div className="flex gap-2 cursor-pointer" onClick={eventInfo.event.extendedProps.openModal}>
			{
				isEventOneDay(eventInfo.event.start, eventInfo.event.end) ?
					<>
						<div className={`w-[4px] rounded-lg`} style={{ backgroundColor: eventInfo.event.backgroundColor }} />
						<div>
							<b>{moment(eventInfo.event.start).format('h:mm a')}-{moment(eventInfo.event.end).format('h:mm a')}</b>
							<div>{eventInfo.event.title}</div>
						</div>
					</>
					:
					<div>
						<b>{eventInfo.event.title}</b>
					</div>
			}
		</div>
	)
}