import Headline from 'components/sponsor/Headline'
import Head from 'next/head'
import React from 'react'

const Sponsor = () => {
	return (
		<>
			<Head>
				<title>Sponsor</title>
				<meta name="description" content="P3RI 1443 H menargetkan lebih dari 120.000 penerima manfaat kepada semua kalangan masyarakat. Mari jadi bagian nyala lentera inspirasi dengan menjadi sponsor kami" />
			</Head>
			<div className="m-5 flex flex-col gap-32 mt-32">
				<Headline />
			</div>
		</>
	)
}

export default Sponsor