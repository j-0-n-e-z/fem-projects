import {
	ChallengeLink,
	Footer,
	Header,

} from '@/components'
import { challenges } from '@/data'

export const App = () => (
	<div className='grid min-h-screen w-full place-items-center gap-y-8 font-Nunito dark:bg-gray-700'>
		<Header />
		<main className='flex h-full w-10/12 flex-wrap content-center items-center justify-center gap-2 text-center lg:w-3/5'>
			{challenges.map(challenge => (
				<ChallengeLink key={challenge} challenge={challenge} />
			))}
		</main>
		<Footer />
	</div>
)
