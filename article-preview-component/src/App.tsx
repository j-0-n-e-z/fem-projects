import { ShareIcon } from './components/ShareIcon'
import { SharePopup } from './components/SharePopup'

export default function App() {
	return (
		<main className='w-full min-h-screen grid place-items-center bg-lightGrayishBlue'>
			<article className='lg:mt-0 -mt-2 flex lg:flex-row flex-col lg:w-[730px] w-[87%] lg:h-[280px] bg-white lg:shadow-xl shadow-md rounded-lg'>
				<div className='lg:w-[285px] lg:h-full h-[200px] lg:rounded-s-lg rounded-t-lg overflow-hidden'>
					<img
						className='w-full h-full object-cover lg:object-left object-[0_-15px]'
						src='./assets/images/drawers.jpg'
						alt='drawers'
					/>
				</div>
				<div className='font-Manrope lg:py-[33px] pt-9 pb-7 lg:px-10 px-8 flex-1 relative rounded-lg lg:overflow-visible overflow-hidden'>
					<h1 className='lg:text-xl tracking-[0.01rem] text-veryDarkGrayishBlue font-bold'>
						Shift the overall look and feel by adding these wonderful touches to
						furniture in your home
					</h1>
					<p className='text-desaturatedDarkBlue text-[13px] lg:mt-[11px] mt-[12px] tracking-lightlyWide leading-[1.25rem] mb-7 lg:mb-5'>
						Ever been in a room and felt like something was missing? Perhaps it
						felt slightly bare and uninviting. I’ve got some simple tips to help
						you make any room feel complete.
					</p>
					<div className='flex items-center lg:relative lg:mt-5 mt-3 h-10'>
						<div className='w-full flex justify-between items-center lg:pt-0 pt-3'>
							<article className='flex'>
								<div className='rounded-full w-10 h-10 overflow-hidden '>
									<img
										src='./assets/images/avatar-michelle.jpg'
										alt='michelle'
									/>
								</div>
								<div className='flex flex-col ml-4 pt-[1px]'>
									<h2 className='text-veryDarkGrayishBlue text-[13px] font-bold tracking-lightlyWide'>
										Michelle Appleton
									</h2>
									<span className='text-grayishBlue text-[12px] tracking-wider lg:mt-0 mt-[2px]'>
										28 Jun 2020
									</span>
								</div>
							</article>
							<div
								className='-mr-1 grid place-items-center group w-11 h-11 outline-none focus:border-2 border-veryDarkGrayishBlue rounded-full border-dotted'
								tabIndex={0}
							>
								<ShareIcon />
								<SharePopup />
							</div>
						</div>
					</div>
				</div>
			</article>
		</main>
	)
}
