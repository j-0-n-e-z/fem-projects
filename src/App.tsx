import { Link } from 'react-router-dom'

import { challenges } from './data/challenges'

const capitalize = (str: string) =>
	str
		.split('-')
		.map(word => word[0].toUpperCase() + word.slice(1))
		.join(' ')

const App = () => (
	<div className='grid min-h-screen w-full place-items-center content-center gap-y-8 font-Mooli'>
		<header>
			<h1 className='text-center text-4xl font-bold'>
				Challenges I have passed
			</h1>
		</header>
		<main className='flex h-full w-10/12 flex-wrap content-center items-center justify-center gap-2 text-center lg:w-3/5'>
			{challenges.map(challenge => (
				<div key={challenge} className='border-2 px-2 py-1'>
					<Link to={challenge}>{capitalize(challenge)}</Link>
				</div>
			))}
		</main>
	</div>
)

export default App
