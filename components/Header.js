import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { SunIcon } from '@heroicons/react/outline'
import { MoonIcon } from '@heroicons/react/solid'

function Header() {
	const { systemTheme, theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	const themeChanger = () => {
		if (!mounted) return null
		const currentTheme = theme === 'system' ? systemTheme : theme

		if (currentTheme === 'dark') {
			return (
				<SunIcon
					className="w-5 h-5 sm:w-7 sm:h-7"
					role="button"
					onClick={() => setTheme('light')}
				/>
			)
		} else {
			return (
				<MoonIcon
					className="w-5 h-5 sm:w-7 sm:h-7"
					role="button"
					onClick={() => setTheme('dark')}
				/>
			)
		}
	}

	return (
		<header className="flex items-center justify-between p-4">
			<h1 className="font-Oswald font-bold text-2xl sm:text-4xl cursor-pointer">
				VG<span className="text-red-500">Dev</span>
			</h1>

			<div>{themeChanger()}</div>
		</header>
	)
}

export default Header
