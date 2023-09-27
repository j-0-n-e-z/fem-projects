export const Result = () => {
	return (
		<div className='flex flex-col lg:rounded-[30px] rounded-[0_0_30px_30px] items-center lg:w-1/2 w-full bg-gradient-to-b from-slateBlue to-lightRoyalBlue'>
			<h2 className='text-lightLavender lg:text-2xl text-lg lg:mb-8 mb-6 lg:mt-[39px] mt-5 mr-[6px]'>
				Your Result
			</h2>
			<div className='grid place-items-center content-center lg:mb-6 mb-5 rounded-full lg:w-52 w-36 lg:h-52 h-36 bg-gradient-to-b from-violetBlue to-persianBlue'>
				<span className='lg:text-[70px] text-[55px] font-bold text-white lg:leading-[5rem] leading-[4.2rem]'>
					76
				</span>
				<span className='lg:text-md text-base font-bold text-slateBlue-light'>
					of 100
				</span>
			</div>
			<h3 className='font-bold text-white lg:text-[32px] text-2xl lg:mb-6 mb-2 mr-2'>
				Great
			</h3>
			<p className='lg:w-2/3 w-[70%] text-lightLavender lg:leading-6 leading-5 text-center lg:mb-0 mb-10 lg:text-[18px] text-[16px]'>
				You scored higher than 65% of the people who have taken these tests.
			</p>
		</div>
	)
}
