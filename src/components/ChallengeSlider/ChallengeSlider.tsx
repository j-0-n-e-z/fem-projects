import { useRef, useState, type FC } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { challenges } from '../../data/challenges'

import { ArrowIcon } from './components/ArrowIcon'
import { EyeIcon } from './components/EyeIcon'
import { HomeIcon } from './components/HomeIcon'
import { SlashEyeIcon } from './components/SlashEyeIcon'

// TODO: fix reset of showNavigation after F5
// TODO: change button with navigate to Link

export const ChallengeSlider: FC = () => {
	const navigate = useNavigate()
	const [hasError, setHasError] = useState(false)
	const [showNavigation, setShowNavigation] = useState(true)
	const iframeRef = useRef<HTMLIFrameElement>(null)

	const params = useParams()
	const currentChallenge = params.challenge
	const currentChallengeIdx = challenges.findIndex(
		ch => ch === currentChallenge
	)

	if (currentChallengeIdx === -1) {
		console.log('@currentChallengeIdx', currentChallengeIdx)
		return null
	}

	const prev = challenges[currentChallengeIdx - 1]
	const next = challenges[currentChallengeIdx + 1]

	console.log(params)

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
						className='button absolute bottom-3 left-[50%] flex translate-x-[-50%] items-center gap-x-2 md:left-auto md:right-3 md:top-20 md:translate-x-0'
						onClick={() => navigate('/')}
					>
						<HomeIcon />
					</button>
					{prev && (
						<button
							className='button absolute bottom-3 left-3 flex items-center md:bottom-[50%] md:left-3 md:translate-y-[50%]'
							onClick={() => navigate(`../challenges/${prev}`)}
						>
							<ArrowIcon />
						</button>
					)}
					{next && (
						<button
							className='button absolute bottom-3 right-3 flex items-center md:bottom-[50%] md:right-3 md:translate-y-[50%]'
							onClick={() => navigate(`../challenges/${next}`)}
						>
							<ArrowIcon className='rotate-180' />
						</button>
					)}
				</>
			)}
			{hasError && (
				<h2 className='font-Mooli text-4xl font-bold'>Something went wrong</h2>
			)}
			<iframe
				ref={iframeRef}
				className='h-full w-full'
				src={`../build/challenges/${currentChallenge}/dist/index.html`}
				title={currentChallenge}
				onLoad={onIframeLoad}
			/>
		</div>
	)
}
