import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({ children }) => {
	return (
		<div className="bg-primary-surface overflow-x-hidden smooth-scroll" >
			<Navbar />
			{children}
			<Footer />
		</div>
	)
}

export default Layout