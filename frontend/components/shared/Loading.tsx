import React from 'react'
import Lottie from "lottie-react";
import Ketupat from 'public/ketupat.json'
import { motion } from 'framer-motion'

const variants = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			duration: 1,
		}
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 1,
			delay: 0.5
		}
	},
}

const Loading = () => {
	return (
		<motion.div
			variants={variants}
			initial="initial"
			animate="animate"
			exit="exit"
			className="h-screen w-screen z-40 absolute top-0 left-0 bg-main transition-opacity"
		>
			<div className="w-full h-[80%] flex justify-center items-center">
				<div className="relative w-fit flex justify-center items-center">
					<Lottie animationData={Ketupat} className="w-[50%]" />
					<span className="text-3xl bold text-neutral-100 absolute bottom-0">Loading...</span>
				</div>
			</div>
		</motion.div>
	)
}

export default Loading