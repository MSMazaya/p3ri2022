import React, { ReactNode, useState } from 'react'
import { getJadwal } from 'services/jadwal';
import { Event } from 'types/jadwal';
import Modal from 'components/jadwal/Modal';
import JadwalCustom from 'components/jadwal/JadwalCustom';
import Legend from 'components/jadwal/Legend';
import CalendarButton from 'components/jadwal/CalendarButton';
import Head from 'next/head';

type Props = {
	events: Event[];
	children?: ReactNode;
}

const Jadwal = (props: Props) => {
	const [modalEvent, setModalEvent] = useState<Event | null>(null);
	const [openModal, setOpenModal] = useState<boolean>(false);

	return (
		<>
			<Head>
				<title>Jadwal Kegiatan P3RI</title>
				<meta name="description" content="Seluruh jadwal kegiatan offline maupun online dari P3RI Salman ITB" />
			</Head>
			<div className="m-5 mt-32">
				<Modal event={modalEvent} open={openModal} setOpen={setOpenModal} />
				<div className="relative">
					<CalendarButton />
					<JadwalCustom setModalEvent={setModalEvent} setOpenModal={setOpenModal} events={props.events} />
					<Legend />
				</div>

			</div>
		</>
	)
}


export async function getStaticProps() {
	const events = await getJadwal();

	return {
		props: {
			events
		}
	}
}

export default Jadwal