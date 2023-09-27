import { FC } from 'react'
import { Variant as TVariant, variants } from '../data/variants'
import Variant from './Variant'

type PickerProps = {
	setSelectedVariant: (value: TVariant | undefined) => void
}

const Picker: FC<PickerProps> = ({ setSelectedVariant }) => {
	const variantComponents = variants.map(variant => (
		<Variant
			key={variant}
			variant={variant}
			selectVariant={() => setSelectedVariant(variant)}
		/>
	))

	return (
		<div className='w-[375px] lg:w-[500px] flex gap-x-10 gap-y-4 flex-wrap justify-center relative lg:gap-y-8 lg:gap-x-20 mt-20 lg:mt-12'>
			<img
				className='absolute top-14 w-60 z-10 lg:w-80 lg:top-24'
				src='./assets/images/bg-triangle.svg'
				alt='triangle'
			/>
			{variantComponents}
		</div>
	)
}

export default Picker
