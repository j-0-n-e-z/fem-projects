import { useRef, useState } from 'react'

export const useIframe = () => {
	const [iframeHasError, setIframeHasError] = useState(false)
	const iframeRef = useRef<HTMLIFrameElement>(null)

	const onIframeLoad = () => {
		if (iframeRef.current) {
			const hasContent =
				iframeRef.current.contentDocument?.body.firstElementChild?.innerHTML
			setIframeHasError(!hasContent)
			iframeRef.current.style.display = hasContent ? 'block' : 'none'
		}
	}

	return { iframeHasError, iframeRef, onIframeLoad }
}
