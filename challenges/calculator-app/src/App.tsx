import { useEffect, useState } from 'react'
import './App.css'
import { controls, keypad, keys } from './data/keys'
import { operations } from './data/operations'
import { getKeyStyle } from './data/keyStyles'
import {
	addKey,
	getNextTheme,
	getOutputValue,
	isKeyOperator,
	parseToNumber,
	removeLastChar
} from './utils/helpers'
import { switcherStyles, themes } from './data/themes'

export default function App() {
	const [firstValue, setFirstValue] = useState<string>('0')
	const [secondValue, setSecondValue] = useState<string>('0')
	const [operator, setOperator] = useState<string>('')
	const [theme, setTheme] = useState('dark')

	function handleKeyClick(key: string) {
		if (key === controls.RESET) {
			setFirstValue('0')
			setOperator('')
			setSecondValue('0')
		} else if (key === controls.DEL) {
			if (!operator) {
				setFirstValue(value => removeLastChar(value))
			} else if (firstValue) {
				setSecondValue(value => removeLastChar(value))
			}
		} else if (key === keys.DOT) {
			if (!operator) {
				setFirstValue(prev => addKey(prev, key))
			} else if (firstValue) {
				setSecondValue(prev => addKey(prev, key))
			}
		} else if (key === controls.EQUAL) {
			if (!firstValue || !secondValue || !operator) return

			const operation = operations[operator]
			setFirstValue(
				operation(
					parseToNumber(firstValue),
					parseToNumber(secondValue)
				).toString()
			)
			setOperator('')
			setSecondValue('0')
		} else if (!operator && !isKeyOperator(key)) {
			setFirstValue(prev => addKey(prev, key))
		} else if (firstValue && isKeyOperator(key)) {
			setOperator(key)
		} else if (firstValue && operator) {
			setSecondValue(prev => addKey(prev, key))
		}
	}

	useEffect(() => {
		document.querySelector('html')!.setAttribute('data-theme', theme)
	}, [theme])

	return (
		<div className='grid place-items-center content-start gap-5 h-screen bg-main p-6 md:h-auto md:w-[600px]'>
			<div className='flex self-start w-full items-center my-2'>
				<h1 className='text-text text-3xl'>calc</h1>
				<small className='uppercase ml-auto mr-6 mt-6 text-text text-[12px] tracking-widest'>
					theme
				</small>
				<div className='flex flex-col'>
					<div className='flex justify-around text-text text-[12px] md:text-[15px]'>
						<p>1</p>
						<p>2</p>
						<p>3</p>
					</div>
					<div
						className='w-20 h-7 bg-keypad rounded-full flex items-center p-[5px] cursor-pointer'
						onClick={() =>
							setTheme(currentTheme => getNextTheme(themes, currentTheme))
						}
					>
						<div
							className={`rounded-full w-[18px] h-[18px] bg-equal ${switcherStyles[theme]}`}
						></div>
					</div>
				</div>
			</div>
			<div className='w-full h-[6rem] md:h-[8rem] bg-screen rounded-xl flex items-center justify-end pr-6 md:pr-8 pt-2 text-4xl md:text-[55px] text-text '>
				{!operator ? getOutputValue(firstValue) : getOutputValue(secondValue)}
			</div>
			<div className='flex flex-wrap w-full bg-keypad p-5 md:p-8 gap-4 md:gap-6 rounded-xl'>
				{keypad.map(key => (
					<button
						key={key}
						className={`grow w-14 md:w-20 h-16 grid place-items-center rounded-lg ${getKeyStyle(
							key
						)}`}
						onClick={() => handleKeyClick(key)}
					>
						{key}
					</button>
				))}
			</div>
		</div>
	)
}
