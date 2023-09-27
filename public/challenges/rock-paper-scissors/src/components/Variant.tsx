import { FC } from 'react'
import { variantColors } from '../data/variantColors'
import { Variant as TVariant } from '../data/variants'

const variants = {
	rock: './assets/images/icon-rock.svg',
	paper: './assets/images/icon-paper.svg',
	scissors: './assets/images/icon-scissors.svg'
}

type VariantProps = {
	variant: TVariant
	selectVariant?: () => void
}

const Variant: FC<VariantProps> = ({ variant, selectVariant }) => {
	return (
		<div
			key={variant}
			className={`flex justify-center items-center z-20 w-32 h-32 lg:w-52 lg:h-52 rounded-full ${variantColors[variant]}`}
			onClick={selectVariant}
		>
			<div className='w-24 h-24 lg:w-40 lg:h-40 bg-white rounded-full flex shadow-[inset_0_5px_#ccc] justify-center items-center lg:shadow-[inset_0_8px_#ccc]'>
				<img
					className='w-10 h-12 lg:w-[70px] lg:h-20'
					src={variants[variant]}
					alt={variant}
				/>
			</div>
		</div>
	)
}

export default Variant
