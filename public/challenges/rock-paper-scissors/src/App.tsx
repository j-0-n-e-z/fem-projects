import { useState } from 'react'
import './App.css'
import Fight from './components/Fight'
import Picker from './components/Picker'
import Score from './components/Score'
import { Variant } from './data/variants'
import rules from './assets/images/image-rules.svg'

export default function App() {
	const [selectedVariant, setSelectedVariant] = useState<Variant>()
	const [score, setScore] = useState(0)
	const [isShowRules, setIsShowRules] = useState(false)

	return (
		<div className='flex flex-col items-center h-full font-main main-background text-white overflow-hidden'>
			{isShowRules && (
				<div
					className='w-full h-screen flex justify-center items-center absolute z-30 main-background lg:bg-gradient-to-b lg:from-[#000a] lg:to-[#000a] lg:bg-opacity-50'
					onClick={() => setIsShowRules(false)}
				>
					<div className='lg:flex justify-center items-center flex-wrap gap-y-5 lg:w-[400px] lg:h-[400px] lg:bg-white absolute rounded-xl p-8'>
						<p className='uppercase text-black h-fit text-3xl hidden lg:block'>
							rules
						</p>
						<button className='text-[#ccc] hover:text-black transition h-fit ml-auto hidden lg:block'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth='2'
								stroke='currentColor'
								className='w-8 h-8'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M6 18L18 6M6 6l12 12'
								/>
							</svg>
						</button>
						<img src={rules} alt='rules' />
					</div>
				</div>
			)}
			<Score score={score} />
			{!selectedVariant ? (
				<Picker setSelectedVariant={setSelectedVariant} />
			) : (
				<Fight
					selectedVariant={selectedVariant}
					setSelectedVariant={setSelectedVariant}
					setScore={setScore}
				/>
			)}
			<div className='mb-10 mt-auto lg:ml-auto lg:mr-7'>
				<button
					className='py-2 px-10 tracking-widest border rounded-lg uppercase'
					onClick={() => setIsShowRules(true)}
				>
					rules
				</button>
			</div>
		</div>
	)
}
