import { motion } from 'framer-motion'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const variants = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
	},
}

const Layout = ({ children }) => {
	return (
		<motion.div
			variants={variants}
			initial="initial"
			animate="animate"
			className="bg-primary-surface overflow-x-hidden smooth-scroll" >
			<Navbar />
			{children}
			<Footer />
		</motion.div>
	)
}

export default Layout