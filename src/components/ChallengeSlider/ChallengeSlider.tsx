import { useRef, useState, type FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { ArrowIcon } from './components/ArrowIcon'
import { EyeIcon } from './components/EyeIcon'
import { HomeIcon } from './components/HomeIcon'
import { SlashEyeIcon } from './components/SlashEyeIcon'

interface ChallengeProps {
	prev?: string
	current: string
	next?: string
}

export const ChallengeSlider: FC<ChallengeProps> = ({
	prev,
	current,
	next
}) => {
	const navigate = useNavigate()
	const [hasError, setHasError] = useState(false)
	const [showNavigation, setShowNavigation] = useState(true)
	const iframeRef = useRef<HTMLIFrameElement>(null)

	const onIframeLoad = () => {
		if (iframeRef.current) {
			const hasContent =
				iframeRef.current.contentDocument?.body.firstElementChild?.innerHTML
			setHasError(!hasContent)
			iframeRef.current.style.display = hasContent ? 'block' : 'none'
		}
	}

	const toggleNavigation = () => {
		setShowNavigation(prev => !prev)
	}

	return (
		<div className='flex h-screen items-center justify-center'>
			<button
				className='button absolute right-3 top-3 flex items-center gap-x-2'
				onClick={toggleNavigation}
			>
				{showNavigation ? <EyeIcon /> : <SlashEyeIcon />}
			</button>
			{showNavigation && (
				<>
					<button
						className='button absolute bottom-3 left-[50%] flex translate-x-[-50%] items-center gap-x-2'
						onClick={() => navigate('/')}
					>
						<HomeIcon />
					</button>
					{prev && (
						<button
							className='button absolute bottom-3 left-3 flex items-center md:bottom-[50%] md:left-3 md:translate-y-[50%]'
							onClick={() => navigate(`../${prev}`)}
						>
							<ArrowIcon />
						</button>
					)}
					{next && (
						<button
							className='button absolute bottom-3 right-3 flex items-center md:bottom-[50%] md:right-3 md:translate-y-[50%]'
							onClick={() => navigate(`../${next}`)}
						>
							<ArrowIcon className='rotate-180' />
						</button>
					)}
				</>
			)}
			{hasError && (
				<h2 className='font-Mooli text-4xl font-bold' id='error'>
					Something went wrong
				</h2>
			)}
			<iframe
				ref={iframeRef}
				className='h-full w-full'
				src={`/challenges/${current}/dist/index.html`}
				title={current}
				onLoad={onIframeLoad}
			/>
		</div>
	)
}
