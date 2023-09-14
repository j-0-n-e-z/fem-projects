import { Badge } from './Badge'
import { badges } from '../data/badges'

export const Summary = () => {
	return (
		<div className='flex flex-col lg:w-1/2 w-full lg:px-10 px-8 lg:pt-9 pt-5 pb-11'>
			<h2 className='text-darkGrayBlue font-bold lg:text-2xl text-lg lg:mb-8 mb-6'>
				Summary
			</h2>
			<ul className='lg:space-y-5 space-y-4'>
				{badges.map(badge => (
					<Badge key={badge.title} {...badge} />
				))}
			</ul>
			<button className='rounded-full p-4 w-full bg-darkGrayBlue text-white cursor-pointer lg:mt-auto mt-7 bg-gradient bg-size-200 bg-pos-static hover:bg-pos-hover transition-all duration-200'>
				Continue
			</button>
		</div>
	)
}
