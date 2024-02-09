import type { FC } from 'react'

import { ArrowIcon } from '@/components'

interface NavigationButtonProps {
	onClick: () => void
	towardsRight?: boolean
}

export const NavigationButton: FC<NavigationButtonProps> = ({
	onClick,
	towardsRight = true
}) => (
	<button
		className={`button absolute bottom-3 flex items-center md:bottom-[50%]  md:translate-y-[50%] ${
			towardsRight ? 'right-3 md:right-3' : 'left-3 md:left-3'
		}`}
		onClick={onClick}
	>
		<ArrowIcon className={towardsRight ? 'rotate-180' : ''} />
	</button>
)
