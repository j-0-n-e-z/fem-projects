import { FC, SetStateAction, useEffect, useState } from 'react'
import { getRandomVariant } from '../utils/getRandomVariant'
import { getFightResult } from '../utils/getFightResult'
import Variant from './Variant'
import { Variant as TVariant } from '../data/variants'
import { ValueOf } from '../types'
import { fightResults } from '../data/fightResults'

type FightProps = {
	selectedVariant: TVariant
	setSelectedVariant: (variant: TVariant | undefined) => void
	setScore: React.Dispatch<SetStateAction<number>>
}

export type FightResult = ValueOf<typeof fightResults>

const Fight: FC<FightProps> = ({
	selectedVariant,
	setSelectedVariant,
	setScore
}) => {
	const [houseVariant, setHouseVariant] = useState<TVariant>()
	const [fightResult, setFightResult] = useState<FightResult>()

	useEffect(() => {
		const houseVariantTimeout = setTimeout(() => {
			setHouseVariant(getRandomVariant())
		}, 1000)

		return () => clearTimeout(houseVariantTimeout)
	}, [])

	useEffect(() => {
		let fightResultTimeout: NodeJS.Timeout

		if (houseVariant) {
			fightResultTimeout = setTimeout(() => {
				const result = getFightResult(selectedVariant, houseVariant)
				setFightResult(result)
				setScore(prev =>
					result === fightResults.win
						? prev + 1
						: result === fightResults.lose
						? prev - 1
						: prev
				)
			}, 1000)
		}

		return () => clearTimeout(fightResultTimeout)
	}, [houseVariant])

	function reset() {
		setSelectedVariant(undefined)
		setHouseVariant(undefined)
	}

	return (
		<>
			<div className='flex gap-x-10 flex-wrap justify-center mt-20 lg:mt-8 lg:w-[800px] lg:h-[350px]'>
				<div className='picked-variant lg:animate-[goLeft_1s_ease-in-out_1s_forwards]'>
					{fightResult === fightResults.win && (
						<div className='winner-circle'></div>
					)}
					<Variant variant={selectedVariant} />
					<span className='w-32 lg:w-60 text-center z-10 lg:mb-5'>
						you picked
					</span>
				</div>
				<div className='picked-variant lg:animate-[goRight_1s_ease-in-out_1s_forwards]'>
					{fightResult === fightResults.lose && (
						<div className='winner-circle'></div>
					)}
					{houseVariant ? (
						<Variant variant={houseVariant} />
					) : (
						<div className='w-32 lg:w-40 h-32 lg:h-40 lg:m-6 bg-[#14233c] rounded-full'></div>
					)}
					<span className='w-32 lg:w-60 whitespace-nowrap -ml-4 z-10 lg:text-center lg:mb-5 lg:ml-0'>
						the house picked
					</span>
				</div>
			</div>
			<div className='w-4/6 h-28 mt-12 lg:-mb-10 lg:opacity-0 lg:animate-[appearance_.5s_linear_2s_forwards]'>
				{houseVariant && fightResult && (
					<div className='h-28 flex flex-col items-center justify-between'>
						<span className='uppercase text-5xl font-bold'>{fightResult}</span>
						<button
							className='rounded-lg tracking-wider uppercase bg-white text-black py-3 px-14 hover:text-red-700 transition'
							onClick={reset}
						>
							play again
						</button>
					</div>
				)}
			</div>
		</>
	)
}

export default Fight
