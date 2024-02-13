import type { FC } from 'react'
import { Link } from 'react-router-dom'

import { capitalize } from '@/helpers'

interface ChallengeLinkProps {
	challenge: string
}

export const ChallengeLink: FC<ChallengeLinkProps> = ({ challenge }) => (
	<Link
		className='rounded-md border-2 px-2 py-1 font-semibold transition-colors hover:bg-gray-100 dark:text-white hover:dark:bg-slate-500'
		to={`challenges/${challenge}`}
	>
		{capitalize(challenge)}
	</Link>
)
