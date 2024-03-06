import { useMemo } from 'react'

import {
	ChallengeLink,
	Footer,
	Header,
	LanguageSelector,
	ThemeToggler
} from '@/components'
import type { LanguageContextType } from '@/contexts'
import { LanguageContext } from '@/contexts'
import { challenges } from '@/data'
import { useLanguage } from '@/hooks'

export const App = () => {
	const [currentLanguage, setCurrentLanguage] = useLanguage()

	const value = useMemo(
		() => [currentLanguage, setCurrentLanguage] as LanguageContextType,
		[currentLanguage]
	)

	return (
		<LanguageContext.Provider value={value}>
			<div className='grid min-h-screen w-full place-items-center gap-y-8 font-Nunito dark:bg-gray-700'>
				<LanguageSelector />
				<ThemeToggler />
				<Header />
				<main className='flex h-full w-10/12 flex-wrap content-center items-center justify-center gap-2 text-center lg:w-3/5'>
					{challenges.map(challenge => (
						<ChallengeLink key={challenge} challenge={challenge} />
					))}
				</main>
				<Footer />
			</div>
		</LanguageContext.Provider>
	)
}
