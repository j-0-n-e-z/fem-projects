export type Badge = {
	title: 'reaction' | 'memory' | 'verbal' | 'visual'
	color: {
		text: string
		background: string
	}
	value: number
}

export const badges: Badge[] = [
	{
		title: 'reaction',
		color: {
			text: 'text-lightRed',
			background: 'bg-lightRed/10'
		},
		value: 80
	},
	{
		title: 'memory',
		color: {
			text: 'text-orangeyYellow',
			background: 'bg-orangeyYellow/10'
		},
		value: 92
	},
	{
		title: 'verbal',
		color: {
			text: 'text-greenTeal',
			background: 'bg-greenTeal/10'
		},
		value: 61
	},
	{
		title: 'visual',
		color: {
			text: 'text-lightRoyalBlue',
			background: 'bg-lightRoyalBlue/10'
		},
		value: 72
	}
]
