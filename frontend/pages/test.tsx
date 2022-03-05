import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
	return (
		<div className="p-4 mt-32">
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="p-5 bg-red">
				<Link href="/">home gan</Link>
			</main>
		</div>
	)
}

export default Home
