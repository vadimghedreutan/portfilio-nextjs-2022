import { motion } from 'framer-motion'
import { GrMail } from 'react-icons/gr'

function About() {
	return (
		<div className="flex-grow p-4 relative">
			<img
				src="./img/ui_ux-designer_v3.svg"
				alt=""
				className="hidden sm:inline-grid"
			/>

			{/* email */}
			<motion.div
				className="absolute xs:bottom-24 bottom-36 left-6 bg-red-50 p-4 rounded-full cursor-pointer"
				animate={{
					y: [0, -30, 0],
				}}
				transition={{
					duration: 5,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
			>
				<a href="mailto:vadim.ghedreutan@gmail.com">
					<GrMail className="text-3xl text-red-500" />
				</a>
			</motion.div>
		</div>
	)
}

export default About
