import { useRef, useState, type FC } from 'react'
import { useNavigate } from 'react-router-dom'

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
	const iframeRef = useRef<HTMLIFrameElement>(null)

	const onIframeLoad = () => {
		if (iframeRef.current) {
			const hasContent =
				iframeRef.current.contentDocument?.body.firstElementChild?.innerHTML
			setHasError(!hasContent)
			iframeRef.current.style.display = hasContent ? 'block' : 'none'
		}
	}

	return (
		<div className='flex h-screen items-center justify-center'>
			<button
				className='button absolute left-3 top-3'
				onClick={() => navigate('/')}
			>
				Home
			</button>
			{prev && (
				<button
					className='button absolute left-3 top-[50%] translate-y-[-50%]'
					onClick={() => navigate(`../${prev}`)}
				>
					Prev
				</button>
			)}

			{hasError && (
				<h2 className='font-Mooli text-4xl font-bold' id='error'>
					Something went wrong
				</h2>
			)}
			// TODO: use hasError to hide iframe
			<iframe
				ref={iframeRef}
				className='h-full w-full'
				src={`/challenges/${current}/dist/index.html`}
				title={current}
				onLoad={onIframeLoad}
			/>

			{next && (
				<button
					className='button absolute right-3 top-[50%] translate-y-[-50%]'
					onClick={() => navigate(`../${next}`)}
				>
					Next
				</button>
			)}
		</div>
	)
}
