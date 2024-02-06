import { Link } from 'react-router-dom'

import { MoonIcon, SunIcon } from '@/components'
import { challenges } from '@/data'
import { useTheme } from '@/hooks'

import { capitalize } from './helpers/capitalize'

const App = () => {
	const { currentTheme, toggleTheme } = useTheme()

	return (
		<div className='grid min-h-screen w-full place-items-center content-center gap-y-8 py-10 font-Mooli dark:bg-gray-700'>
			<button
				className='absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full border-2 border-gray-800 transition-all hover:border-gray-600 hover:bg-gray-100 dark:border-white hover:dark:bg-slate-600'
				onClick={toggleTheme}
			>
				{currentTheme === 'light' ? <MoonIcon /> : <SunIcon />}
			</button>
			<header>
				<h1 className='text-center text-4xl font-bold dark:text-white'>
					🎉 FEM Challenges I have passed 🎉
				</h1>
			</header>
			<main className='flex h-full w-10/12 flex-wrap content-center items-center justify-center gap-2 text-center lg:w-3/5'>
				{challenges.map(challenge => (
					<Link
						key={challenge}
						className='rounded-md border-2 px-2 py-1 transition-colors hover:bg-gray-100 dark:text-white hover:dark:bg-slate-500'
						to={`challenges/${challenge}`}
					>
						{capitalize(challenge)}
					</Link>
				))}
			</main>
		</div>
	)
}

export default App
