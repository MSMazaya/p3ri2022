import Headline from 'components/infak/Headline'
import InfakQRSection from 'components/infak/InfakQRSection'
import Misc from 'components/infak/Misc'
import React from 'react'
import Head from 'next/head'

const Infak = () => {
	return (
		<React.Fragment>
			<Head>
				<title>P3RI Salman ITB | Infak</title>
				<meta name="description" content="Infak yang anda berikan berdampak besar bagi penerimanya. Mari ikut tebarkan semangat bermanfaat bersama P3RI." />
			</Head>
			<div className="m-5 flex flex-col gap-32 mt-32">
				<Headline />
				<Misc />
				<InfakQRSection />
			</div>
		</React.Fragment>
	)
}

export default Infak