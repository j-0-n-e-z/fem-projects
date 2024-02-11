import { motion as m } from 'framer-motion'
import { useMemo } from 'react'

import {
	ChallengeLink,
	Footer,
	Header,
	LanguageToggler,
	ThemeToggler
} from '@/components'
import type { LanguageContextType } from '@/contexts'
import { LanguageContext } from '@/contexts'
import { challenges } from '@/data'
import { useToggle } from '@/hooks'

const App = () => {
	const [currentLanguage, toggleLanguage] = useToggle<Language>('lang', [
		'ru',
		'en'
	])

	const value = useMemo(
		() => [currentLanguage, toggleLanguage] as LanguageContextType,
		[currentLanguage]
	)

	return (
		<LanguageContext.Provider value={value}>
			<div className='grid min-h-screen w-full place-items-center gap-y-8 font-Nunito dark:bg-gray-700'>
				<LanguageToggler />
				<ThemeToggler />
				<Header />
				<m.main
					animate
					className='flex h-full w-10/12 flex-wrap content-center items-center justify-center gap-2 text-center lg:w-3/5'
					initial={false}
				>
					{challenges.map(challenge => (
						<ChallengeLink key={challenge} challenge={challenge} />
					))}
				</m.main>
				<Footer />
			</div>
		</LanguageContext.Provider>
	)
}
export default App
