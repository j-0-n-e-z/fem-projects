import { type FC } from 'react'
import { Link, useParams } from 'react-router-dom'

import { EyeIcon, HomeIcon, NavigationButton, SlashEyeIcon } from '@/components'
import { challenges } from '@/data'
import { useIframe, useNavigation } from '@/hooks'

export const ChallengeSlider: FC = () => {
	const {
		showNavigation,
		toggleNavigation,
		currentItems: { 0: prevChallenge, 1: currentChallenge, 2: nextChallenge },
		goForth,
		goBack,
		onKeydown
	} = useNavigation(challenges, useParams().challenge ?? '', 'challenges')
	const { iframeRef, onIframeLoad, iframeHasError } = useIframe(onKeydown)

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
					<Link
						className='button absolute bottom-3 left-[50%] flex translate-x-[-50%] items-center gap-x-2 md:left-auto md:right-3 md:top-20 md:translate-x-0'
						to='/'
					>
						<HomeIcon />
					</Link>
					{prevChallenge && <NavigationButton right={false} onClick={goBack} />}
					{nextChallenge && <NavigationButton onClick={goForth} />}
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

export * from './components/NavigationButton'
