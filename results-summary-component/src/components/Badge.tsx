import { Badge as BadgeType } from '../data/badges'

export function Badge({ title, color, value }: BadgeType) {
	return (
		<li
			className={`flex px-4 py-3 rounded-xl items-center ${color.background}`}
		>
			<img src={`./images/icon-${title}.svg`} alt={title} />
			<span
				className={`lg:ml-3 ml-3 lg:text-[18px] text-[16px] capitalize ${color.text}`}
			>
				{title}
			</span>
			<div className='ml-auto flex items-center'>
				<span className='mr-2 font-bold lg:text-[18px] text-base'>{value}</span>
				<span className='text-slateBlue-light lg:text-[18px] text-base'>
					/ 100
				</span>
			</div>
		</li>
	)
}
