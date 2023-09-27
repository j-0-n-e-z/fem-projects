import type { FC } from 'react'

interface ArrowIconProps extends React.SVGProps<SVGSVGElement> {}

export const ArrowIcon: FC<ArrowIconProps> = ({ className }) => (
	<svg
		className={`h-6 w-6 ${className}`}
		fill='none'
		stroke='currentColor'
		strokeWidth='1.5'
		viewBox='0 0 24 24'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M15.75 19.5L8.25 12l7.5-7.5'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
)
