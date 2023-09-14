import { zodResolver } from '@hookform/resolvers/zod'
import cn from 'classnames'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Fields, validationSchema } from './validationSchema'

export default function App() {
	const {
		handleSubmit,
		register,
		formState: { errors },
		getValues
	} = useForm<Fields>({
		resolver: zodResolver(validationSchema),
		mode: 'onSubmit',
		reValidateMode: 'onBlur'
	})
	const [age, setAge] = useState<Fields>()

	function onSubmit() {
		const now = new Date()
		const { year, month, day } = getValues()
		const inputDate = new Date(year, month - 1, day)
		const ageInMilliseconds = now.getTime() - inputDate.getTime()
		const years = ~~(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365)
		const months = ~~(((ageInMilliseconds / 1000 / 60 / 60 / 24) % 365) / 31)
		const days = ~~(((ageInMilliseconds / 1000 / 60 / 60 / 24) % 365) % 31)

		setAge({
			year: years,
			month: months,
			day: days
		})
	}

	return (
		<article className='font-Poppins lg:w-[840px] lg:h-[650px] w-11/12 h-fit lg:mt-0 mt-[88px] bg-white rounded-tr-3xl rounded-l-3xl lg:rounded-br-[200px] rounded-br-[100px] lg:py-16 lg:px-14 py-12 px-6'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='flex lg:gap-x-8 gap-x-4'>
					{/* DAY */}
					<label className='time-item'>
						<span
							className={cn('time-item__name', {
								'time-item__name--error': errors?.day
							})}
						>
							DAY
						</span>
						<input
							className={cn('time-item__input', {
								'time-item__input--error': errors?.day
							})}
							type='number'
							placeholder='DD'
							{...register('day')}
						/>
						{errors?.day && (
							<span className='time-item__error'>{errors.day.message}</span>
						)}
					</label>

					{/* MONTH */}
					<label className='time-item'>
						<span
							className={cn('time-item__name', {
								'time-item__name--error': errors?.month
							})}
						>
							MONTH
						</span>
						<input
							className={cn('time-item__input', {
								'time-item__input--error': errors?.month
							})}
							type='number'
							placeholder='MM'
							{...register('month')}
						/>
						{errors?.month && (
							<span className='time-item__error'>{errors.month.message}</span>
						)}
					</label>

					{/* YEAR */}
					<label className='time-item'>
						<span
							className={cn('time-item__name', {
								'time-item__name--error': errors?.year
							})}
						>
							YEAR
						</span>
						<input
							className={cn('time-item__input', {
								'time-item__input--error': errors?.year
							})}
							type='number'
							placeholder='YYYY'
							{...register('year')}
						/>
						{errors?.year && (
							<span className='time-item__error'>{errors.year.message}</span>
						)}
					</label>
				</div>

				<div className='flex items-center lg:mt-2 mt-7 lg:h-auto h-16'>
					<hr className='flex-1' />
					<button
						type='submit'
						className='lg:w-24 w-16 lg:h-24 h-16 lg:static absolute left-[50%] translate-x-[-50%] bg-purple rounded-full grid place-items-center outline-none focus-visible:outline-4 focus-visible:outline-dotted focus-visible:outline-offset-2 focus-visible:outline-light-red'
					>
						<img
							className='lg:w-fit w-7'
							src='./images/icon-arrow.svg'
							alt='arrow'
						/>
					</button>
				</div>
			</form>

			<div className='flex flex-col lg:mt-0 mt-8'>
				<div className='age-item'>
					<span className='age-item__count'>{age?.year ?? '--'}</span>
					<span className='age-item__name'>years</span>
				</div>
				<div className='age-item'>
					<span className='age-item__count'>{age?.month ?? '--'}</span>
					<span className='age-item__name'>months</span>
				</div>
				<div className='age-item'>
					<span className='age-item__count'>{age?.day ?? '--'}</span>
					<span className='age-item__name'>days</span>
				</div>
			</div>
		</article>
	)
}
