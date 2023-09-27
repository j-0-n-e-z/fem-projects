import { Link } from 'react-router-dom'

import { challenges } from './data/challenges'
import { capitalize } from './helpers/capitalize'

const App = () => (
	<div className='grid min-h-screen w-full place-items-center content-center gap-y-8 py-10 font-Mooli'>
		<header>
			<h1 className='text-center text-4xl font-bold'>
				🎉 FEM Challenges I have passed 🎉
			</h1>
		</header>
		<main className='flex h-full w-10/12 flex-wrap content-center items-center justify-center gap-2 text-center lg:w-3/5'>
			{challenges.map(challenge => (
				<Link
					key={challenge}
					className='rounded-md border-2 px-2 py-1 transition-colors hover:bg-gray-100'
					to={challenge}
				>
					{capitalize(challenge)}
				</Link>
			))}
		</main>
	</div>
)

export default App
