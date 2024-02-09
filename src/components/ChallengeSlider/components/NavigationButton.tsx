import type { FC } from 'react'

import { ArrowIcon } from '@/components'

interface NavigationButtonProps {
	onClick: () => void
	right?: boolean
}

export const NavigationButton: FC<NavigationButtonProps> = ({
	onClick,
	right = true
}) => (
	<button
		className={`button absolute bottom-3 flex items-center md:bottom-[50%]  md:translate-y-[50%] ${
			right ? 'right-3 md:right-3' : 'left-3 md:left-3'
		}`}
		onClick={onClick}
	>
		<ArrowIcon className={right ? 'rotate-180' : ''} />
	</button>
)
