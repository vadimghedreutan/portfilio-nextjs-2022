import { motion } from 'framer-motion'
import { GrMail } from 'react-icons/gr'

function Contact() {
	return (
		<motion.div
			className="absolute top-4 right-4 xl:right-32
            bg-red-50 p-3 rounded-full cursor-pointer"
			animate={{
				y: [0, 24, 0],
			}}
			transition={{
				duration: 5,
				repeat: Infinity,
				ease: 'easeInOut',
			}}
		>
			<a href="mailto:vadim.ghedreutan@gmail.com">
				<GrMail className="text-2xl text-red-500" />
			</a>
		</motion.div>
	)
}

export default Contact
