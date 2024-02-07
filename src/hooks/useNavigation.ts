import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const useNavigation = <T>(items: T[], item: T) => {
	const [showNavigation, setShowNavigation] = useState<boolean>(true)
	const navigate = useNavigate()

	function getItems(
		currentItem: T,
		step = 0
	): [T | undefined, T, T | undefined] {
		const currentItemIdx = items.findIndex(item => item === currentItem)

		if (currentItemIdx === -1) {
			throw Error(`${item} was not found`)
		}

		const prevItem = items[currentItemIdx - 1]
		const nextItem = items[currentItemIdx + 1]

		if (step === -1 && prevItem !== undefined) {
			return [items[currentItemIdx - 2], prevItem, currentItem]
		}

		if (step === 1 && nextItem !== undefined) {
			return [currentItem, nextItem, items[currentItemIdx + 2]]
		}

		return [prevItem, currentItem, nextItem]
	}

	const [currentItems, setCurrentItems] = useState<
		[T | undefined, T, T | undefined]
	>(getItems(item, 0))

	const goForth = () => {
		navigate(`../challenges/${currentItems[2]}`)
		setCurrentItems(getItems(currentItems[1], 1))
	}

	const goBack = () => {
		navigate(`../challenges/${currentItems[0]}`)
		setCurrentItems(getItems(currentItems[1], -1))
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

	// I have no idea why it works only when listener is added on every render
	useEffect(() => {
		window.addEventListener('keydown', onKeydown)
		return () => window.removeEventListener('keydown', onKeydown)
	})

	return {
		currentItems,
		goBack,
		goForth,
		onKeydown,
		showNavigation,
		toggleNavigation
	}
}
