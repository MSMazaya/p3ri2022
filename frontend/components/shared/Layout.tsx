import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }) => {
	return (
		<div className="bg-primary-surface relative w-screen overflow-x-hidden">
			<Navbar />
			{children}
			<Footer />
		</div>
	)
}

export default Layout