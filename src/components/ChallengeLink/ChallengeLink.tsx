import { motion as m } from 'framer-motion'
import type { FC } from 'react'
import { Link } from 'react-router-dom'

import { capitalize } from '@/helpers'

interface ChallengeLinkProps {
	challenge: string
}

export const ChallengeLink: FC<ChallengeLinkProps> = ({ challenge }) => {
	const variants = {
		closed: {
			opacity: 0,
			transition: {
				y: { stiffness: 1000 }
			},
			y: 50
		},
		open: {
			opacity: 1,
			transition: {
				y: { stiffness: 1000, velocity: -100 }
			},
			y: 0
		}
	}

	return (
		<m.div variants={variants}>
			<Link
				className='rounded-md border-2 px-2 py-1 font-semibold transition-colors hover:bg-gray-100 dark:text-white hover:dark:bg-slate-500'
				to={`challenges/${challenge}`}
			>
				{capitalize(challenge)}
			</Link>
		</m.div>
	)
}
