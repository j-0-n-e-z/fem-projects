import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const useNavigation = <T>(items: T[], item: T, basePath: string) => {
	const [showNavigation, setShowNavigation] = useState(true)
	const navigate = useNavigate()

	function getStartIdx(currentItemIdx: number) {
		if (currentItemIdx === -1) {
			throw Error(`${item} was not found`)
		}

		return currentItemIdx - 1
	}

	const [startIdx, setStartIdx] = useState(
		getStartIdx(items.findIndex(x => x === item))
	)

	const goForth = () => {
		if (startIdx + 2 < items.length) {
			const nextItem = items[startIdx + 2]
			navigate(`../${basePath}/${nextItem}`)
			setStartIdx(startIdx => startIdx + 1)
		}
	}

	const goBack = () => {
		if (startIdx >= 0) {
			const prevItem = items[startIdx]
			navigate(`../${basePath}/${prevItem}`)
			setStartIdx(startIdx => startIdx - 1)
		}
	}

	const toggleNavigation = () => {
		setShowNavigation(showNavigation => !showNavigation)
	}

	const onKeydown = (e: KeyboardEvent) => {
		if (e.key === 'ArrowLeft') {
			goBack()
		} else if (e.key === 'ArrowRight') {
			goForth()
		}
	}

	useEffect(() => {
		const showNav = localStorage.getItem('show-nav')

		if (showNav !== null) {
			setShowNavigation(Boolean(JSON.parse(showNav)))
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('show-nav', JSON.stringify(showNavigation))
	}, [showNavigation])

	// keyword navigation works only when event listener is added on every render
	useEffect(() => {
		window.addEventListener('keydown', onKeydown)
		return () => window.removeEventListener('keydown', onKeydown)
	})

	return {
		currentItems: [items[startIdx], items[startIdx + 1], items[startIdx + 2]],
		goBack,
		goForth,
		onKeydown,
		showNavigation,
		toggleNavigation
	}
}
