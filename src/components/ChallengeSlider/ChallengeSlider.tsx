import { useEffect, useState, type FC } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { ArrowIcon, EyeIcon, HomeIcon, SlashEyeIcon } from '@/components'
import { challenges } from '@/data'
import { useIframe } from '@/hooks'

export const ChallengeSlider: FC = () => {
	const { iframeRef, onIframeLoad, iframeHasError } = useIframe()
	const [isShowNavigation, setIsShowNavigation] = useState<boolean>(true)
	const navigate = useNavigate()

	const currentChallenge = useParams().challenge
	const currentChallengeIdx = challenges.findIndex(
		ch => ch === currentChallenge
	)

	if (currentChallengeIdx === -1) {
		throw Error('challenge was not found')
	}

	useEffect(() => {
		const showNav = localStorage.getItem('SHOW_NAV')
		if (showNav !== null) {
			setIsShowNavigation(Boolean(JSON.parse(showNav)))
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('SHOW_NAV', JSON.stringify(isShowNavigation))
	}, [isShowNavigation])

	const prevChallenge = challenges[currentChallengeIdx - 1]
	const nextChallenge = challenges[currentChallengeIdx + 1]

	const toggleNavigation = () => {
		setIsShowNavigation(prev => !prev)
	}

	return (
		<div className='flex h-screen items-center justify-center'>
			<button
				className='button absolute right-3 top-3 flex items-center gap-x-2'
				onClick={toggleNavigation}
			>
				{isShowNavigation ? <EyeIcon /> : <SlashEyeIcon />}
			</button>
			{isShowNavigation && (
				<>
					<button
						className='button absolute bottom-3 left-[50%] flex translate-x-[-50%] items-center gap-x-2 md:left-auto md:right-3 md:top-20 md:translate-x-0'
						onClick={() => navigate('/')}
					>
						<HomeIcon />
					</button>
					{prevChallenge && (
						<Link
							className='button absolute bottom-3 left-3 flex items-center md:bottom-[50%] md:left-3 md:translate-y-[50%]'
							to={`../challenges/${prevChallenge}`}
						>
							<ArrowIcon />
						</Link>
					)}
					{nextChallenge && (
						<Link
							className='button absolute bottom-3 right-3 flex items-center md:bottom-[50%] md:right-3 md:translate-y-[50%]'
							to={`../challenges/${nextChallenge}`}
						>
							<ArrowIcon className='rotate-180' />
						</Link>
					)}
				</>
			)}
			{iframeHasError && (
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

export * from './components/ArrowIcon'
export * from './components/EyeIcon'
export * from './components/HomeIcon'
export * from './components/SlashEyeIcon'
