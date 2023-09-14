import { useState } from 'react'

export const useMultiStep = (stepsCount: number) => {
	const [currentStepIndex, setCurrentStepIndex] = useState(0)
	const [direction, setDirection] = useState(1)

	const goNext = () => {
		if (currentStepIndex === stepsCount - 1) return
		setDirection(1)
		setCurrentStepIndex(prev => prev + 1)
	}

	const goBack = () => {
		if (currentStepIndex === 0) return
		setDirection(-1)
		setCurrentStepIndex(prev => prev - 1)
	}

	return {
		currentStepIndex,
		goNext,
		goBack,
		direction,
		isFirstStep: currentStepIndex === 0,
		isLastStep: currentStepIndex === stepsCount - 2,
		isThankYouStep: currentStepIndex === stepsCount - 1
	}
}
