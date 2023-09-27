import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faTwitter,
	faFacebookF,
	faPinterest
} from '@fortawesome/free-brands-svg-icons'
import { FC } from 'react'

export const SharePopup: FC = () => {
	return (
		<div
			className={`group-focus:block hover:block hidden absolute lg:hidden lg:group-hover:block cursor-auto lg:bottom-[30px] lg:w-[250px] w-full bottom-0 left-0 lg:left-auto lg:-right-[108px] lg:h-[88px]`}
		>
			<div className='flex lg:px-[38px] px-8 items-center relative lg:w-[250px] w-full lg:h-[55px] h-20 bg-veryDarkGrayishBlue lg:rounded-xl text-lightGrayishBlue'>
				<span className='text-grayishBlue tracking-[.3rem] uppercase text-[13px] pt-1'>
					share
				</span>
				<div className='flex h-full items-center gap-x-[16px] ml-[18px] pt-[2px] text-lightGrayishBlue'>
					<a
						href='https://www.facebook.com'
						target='_blank'
						aria-label='facebook'
						className='bg-lightGrayishBlue hover:scale-110 hover:bg-white transition w-5 h-5 rounded-sm text-veryDarkGrayishBlue'
					>
						<FontAwesomeIcon
							className='ml-[7px] text-[17px]'
							icon={faFacebookF}
						/>
					</a>
					<a
						href='https://www.twitter.com'
						target='_blank'
						aria-label='twitter'
						className='hover:scale-110 transition'
					>
						<FontAwesomeIcon
							className='hover:text-white transition text-[20px] mt-1'
							icon={faTwitter}
						/>
					</a>
					<a
						href='https://www.pinterest.com'
						target='_blank'
						aria-label='pinterest'
						className='hover:scale-110 transition'
					>
						<FontAwesomeIcon
							className='hover:text-white transition text-[20px]'
							icon={faPinterest}
						/>
					</a>
				</div>
				<div className='lg:block hidden absolute -bottom-[12px] left-[50%] -translate-x-[50%] w-0 h-0 border-t-veryDarkGrayishBlue border-[12px] border-b-0 border-l-transparent border-r-transparent'></div>
			</div>
		</div>
	)
}
