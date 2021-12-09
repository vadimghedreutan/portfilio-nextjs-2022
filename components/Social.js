import { motion } from 'framer-motion'
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import Contact from './Contact'

function Social() {
	return (
		<div className="relative p-4 mt-2">
			{/* social */}
			<div className="flex items-center space-x-3 sm:space-x-4">
				<motion.a
					href="https://www.instagram.com/vadim_ghedreutan/"
					whileTap={{ scale: 0.9 }}
					initial={{ transform: 'scale(0)' }}
					animate={{ scale: [0, 1, 1.1, 1] }}
					transition={{ type: 'spring', duration: 0.8, delay: 0.3 }}
				>
					<FaInstagram className="icons" />
				</motion.a>
				<motion.a
					href="https://github.com/vadimghedreutan"
					whileTap={{ scale: 0.9 }}
					initial={{ transform: 'scale(0)' }}
					animate={{ scale: [0, 1, 1.1, 1] }}
					transition={{ type: 'spring', duration: 0.8, delay: 0.4 }}
				>
					<FaGithub className="icons" />
				</motion.a>
				<motion.a
					href="https://linkedin.com/in/vadimghedreutan"
					whileTap={{ scale: 0.9 }}
					initial={{ transform: 'scale(0)' }}
					animate={{ scale: [0, 1, 1.1, 1] }}
					transition={{ type: 'spring', duration: 0.8, delay: 0.5 }}
				>
					<FaLinkedin className="icons" />
				</motion.a>
			</div>

			{/* title */}
			<div className="flex flex-col mt-5 space-y-2">
				<p className="font-semibold text-sm sm:text-base">
					Vadim Ghedreutan
				</p>
				<motion.hr
					initial={{ width: 0 }}
					animate={{ width: '3rem' }}
					transition={{ type: 'spring', delay: 0.2, duration: 1.5 }}
					className="w-12 border-solid border-red-500 border-2"
				/>
			</div>

			{/* contact */}
			<Contact />
		</div>
	)
}

export default Social
