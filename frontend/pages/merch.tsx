import Headline from 'components/merch/Headline'
import Products from 'components/merch/Products'
import Quote from 'components/merch/Quote'
import React, { ReactNode } from 'react'
import { getMerches } from 'services/merch'
import { Merch } from 'types/merch'

type Props = {
	merches: Merch[];
	children?: ReactNode;
}

const Merch = (props: Props) => {
	return (
		<div className="mt-32">
			<Headline />
			<Products merches={props.merches} />
			<Quote />
		</div>
	)
}

export async function getStaticProps() {
	const merches = await getMerches();

	return {
		props: {
			merches
		}
	}
}

export default Merch