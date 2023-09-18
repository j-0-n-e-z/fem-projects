import { variants } from '../data/variants'

export function getRandomVariant() {
	return variants[~~(Math.random() * variants.length)]
}
