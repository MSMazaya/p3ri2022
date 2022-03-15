import Headline from 'components/merch/Headline'
import Products from 'components/merch/Products'
import Quote from 'components/merch/Quote'
import Head from 'next/head'
import React, { ReactNode } from 'react'
import { getAllMerches } from 'services/merch'
import { Merch } from 'types/merch'

type Props = {
	merches: Merch[];
	children?: ReactNode;
}

const Merch = (props: Props) => {
	return (
		<>
			<Head>
				<title>Merchandise</title>
				<meta name="description" content="Beli merchandise yang akan menemani kegiatan Ramadhan anda dari P3RI Official Merch Store" />
			</Head>
			<div className="mt-32 flex flex-col gap-20">
				<Headline />
				<Products merches={props.merches} />
				<Quote />
			</div>
		</>
	)
}

export async function getStaticProps() {
	const merches = await getAllMerches();

	return {
		props: {
			merches
		}
	}
}

export default Merch