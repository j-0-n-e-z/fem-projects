import { FC } from 'react'

export const ShareIcon: FC= () => {
	return (
		<div className='relative z-10 group-focus:bg-desaturatedDarkBlue bg-lightGrayishBlue w-8 h-8 rounded-full grid place-items-center cursor-pointer group-hover:bg-desaturatedDarkBlue transition'>
			<svg
				className='group-focus:fill-white fill-desaturatedDarkBlue group-hover:fill-white transition'
				xmlns='http://www.w3.org/2000/svg'
				width='15'
				height='13'
			>
				<path d='M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z' />
			</svg>
		</div>
	)
}
