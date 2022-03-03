import Headline from 'components/infak/Headline'
import InfakQRSection from 'components/infak/InfakQRSection'
import Misc from 'components/infak/Misc'
import React from 'react'

const Infak = () => {
	return (
		<div className="m-5 flex flex-col gap-32 mt-32">
			<Headline />
			<Misc />
			<InfakQRSection />
		</div>
	)
}

export default Infak