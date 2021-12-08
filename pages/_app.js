import '../styles/globals.scss'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider enableSystem={true} attribute="class">
			<AnimatePresence exitBeforeEnter>
				<Component {...pageProps} />
			</AnimatePresence>
		</ThemeProvider>
	)
}

export default MyApp
