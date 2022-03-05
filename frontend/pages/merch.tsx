import Headline from 'components/merch/Headline'
import Products from 'components/merch/Products'
import Quote from 'components/merch/Quote'
import React from 'react'

const Merch = () => {
	return (
		<div className="mt-32">
			<Headline />
			<Products />
			<Quote />
		</div>
	)
}

export default Merch