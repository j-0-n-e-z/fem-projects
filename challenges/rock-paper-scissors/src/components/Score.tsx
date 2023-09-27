import { FC } from 'react'

type ScoreProps = {
	score: number
}

const Score: FC<ScoreProps> = ({ score }) => {
	return (
		<div className='flex justify-between items-center w-5/6 h-24 lg:w-1/2 lg:h-36 border-[3px] border-[#606e85] rounded-md lg:rounded-2xl mt-7 lg:mt-9 z-10'>
			<img
				className='h-14 ml-4 lg:h-24 lg:ml-7'
				src='./assets/images/logo.svg'
				alt='logo'
			/>
			<div className='flex flex-col justify-center items-center rounded lg:rounded-lg text-black mr-3 lg:mr-5 w-20 lg:w-36 h-[70px] lg:h-4/5 bg-white'>
				<small className='uppercase text-[10px] lg:text-base lg:font-normal font-bold text-[#2a46c0] tracking-wider'>
					score
				</small>
				<div className='text-4xl lg:text-[66px] text-[#3b4363] font-bold lg:my-3'>
					{score}
				</div>
			</div>
		</div>
	)
}

export default Score
