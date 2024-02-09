import { useEffect, useRef, useState } from 'react'

export const useIframe = (onKeydown: (e: KeyboardEvent) => void) => {
	const [iframeHasError, setIframeHasError] = useState(false)
	const iframeRef = useRef<HTMLIFrameElement>(null)

	const onIframeLoad = () => {
		console.log('onIframeLoad')
		if (iframeRef.current) {
			const hasContent = Boolean(
				iframeRef.current.contentDocument?.body.firstElementChild?.innerHTML
			)
			setIframeHasError(!hasContent)
			iframeRef.current.style.display = hasContent ? 'block' : 'none'
			iframeRef.current.contentDocument?.addEventListener('keydown', onKeydown)
		}
	}

	useEffect(
		() => () => {
			iframeRef.current?.contentDocument?.removeEventListener(
				'keydown',
				onKeydown
			)
		},
		[]
	)

	return { iframeHasError, iframeRef, onIframeLoad }
}
