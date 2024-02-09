import {
	ChallengeLink,
	Footer,
	Header,
	LanguageToggler,
	ThemeToggler
} from '@/components'
import { challenges } from '@/data'

import { LanguageContext } from './context/LanguageContext'
import { useLanguage } from './hooks'

const App = () => {
	const { currentLanguage, toggleLanguage } = useLanguage()

	return (
		<LanguageContext.Provider value={currentLanguage ?? 'ru'}>
			<div className='grid min-h-screen w-full place-items-center gap-y-8 font-Mooli dark:bg-gray-700'>
				<ThemeToggler />
				<LanguageToggler toggleLanguage={toggleLanguage} />
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
export default App
