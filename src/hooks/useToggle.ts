import { useEffect, useState } from 'react'

export const useToggle = <T>(
	localStorageName: string,
	togglingValues: [T, T],
	additionalSetter?: (value: T) => void
) => {
	const [firstValue, secondValue] = togglingValues
	const [togglingValue, setTogglingValue] = useState<T>(firstValue)

	const setValue = (value: T) => {
		if (additionalSetter) {
			additionalSetter(value)
		}
		localStorage.setItem(localStorageName, JSON.stringify(value))
		setTogglingValue(value)
	}

	const setValueFromLocalStorage = (isToggling = false) => {
		const value = localStorage.getItem(localStorageName)
		const isFirst = JSON.parse(value ?? '{}') === firstValue

		if (value === null || (value && isFirst)) {
			setValue(isToggling ? secondValue : firstValue)
			return
		}

		if (!isFirst) {
			setValue(isToggling ? firstValue : secondValue)
		}
	}

	useEffect(() => {
		setValueFromLocalStorage()
	}, [])

	const toggleValue = () => setValueFromLocalStorage(true)
	return [togglingValue, toggleValue] as const
}
