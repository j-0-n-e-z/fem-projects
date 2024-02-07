import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const useNavigation = <T>(items: T[], item: T, basePath: string) => {
	const [showNavigation, setShowNavigation] = useState<boolean>(true)
	const navigate = useNavigate()

	function getStartIdx(currentItemIdx: number) {
		if (currentItemIdx === -1) {
			throw Error(`${item} was not found`)
		}

		return currentItemIdx - 1
	}

	const [startIdx, setStartIdx] = useState<number>(
		getStartIdx(items.findIndex(x => x === item))
	)

	const goForth = () => {
		if (startIdx + 2 < items.length) {
			navigate(`../${basePath}/${items[startIdx + 2]}`)
			setStartIdx(startIdx => startIdx + 1)
		}
	}

	const goBack = () => {
		if (startIdx >= 0) {
			navigate(`../${basePath}/${items[startIdx]}`)
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

	// I have no idea why it works only when event listener is added on every render
	useEffect(() => {
		window.addEventListener('keydown', onKeydown)
		return () => window.removeEventListener('keydown', onKeydown)
	})

	console.log('start', startIdx)

	return {
		currentItems: [
			items[startIdx],
			items[startIdx + 1],
			items[startIdx + 2]
		],
		goBack,
		goForth,
		onKeydown,
		showNavigation,
		toggleNavigation
	}
}
