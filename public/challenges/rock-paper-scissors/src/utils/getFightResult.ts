import { FightResult } from '../components/Fight'
import { fightResults } from '../data/fightResults'
import { Variant, variants } from '../data/variants'

export const getFightResult = (
	selectedVariant: Variant,
	houseVariant: Variant
): FightResult => {
	const selectedVariantIndex = variants.indexOf(selectedVariant)
	const houseVariantIndex = variants.indexOf(houseVariant)

	// this would work only for [paper, scissors, rock] in this order only
	if (selectedVariantIndex === (houseVariantIndex + 1) % variants.length)
		return fightResults.win

	if (selectedVariantIndex === (houseVariantIndex + 2) % variants.length)
		return fightResults.lose

	return fightResults.tie
}
