import { useEffect } from 'react'

export function useOnClickOutside(
	handler: () => void,
	...insideElements: any[]
) {
	useEffect(() => {
		function handleClickOutside(e: MouseEvent) {
			const isClickedOutside = !insideElements.some(
				insideElement => e.target instanceof insideElement
			)

			if (isClickedOutside) {
				handler()
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])
}
