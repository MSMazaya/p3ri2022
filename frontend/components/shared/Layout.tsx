import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children }) => {
	return (
		<div className="bg-primary-surface relative w-screen overflow-x-hidden">
			<Navbar />
			{children}
		</div>
	)
}

export default Layout