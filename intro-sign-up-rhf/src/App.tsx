import { Form, validationSchema } from './data/validationSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from './Input'
import { Path, SubmitHandler, useForm } from 'react-hook-form'

export default function App() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<Form>({ resolver: zodResolver(validationSchema) })

	const onSubmit: SubmitHandler<Form> = data => {
		console.log(data)
		reset()
	}

	return (
		<main className='font-Poppins w-full min-h-screen grid place-items-center bg-light-red lg:bg-desktop bg-mobile bg-no-repeat bg-center'>
			<section className='lg:w-auto w-[88%] flex lg:flex-row flex-col lg:gap-x-7 gap-y-14 my-20'>
				<div className='lg:w-[540px] grid content-center lg:gap-y-7 gap-y-5 mt-2 lg:text-start text-center'>
					<h1 className='text-white lg:text-[50px] text-[28px] lg:px-0 px-10 font-bold lg:leading-[3.5rem] leading-9 -tracking-[0.025rem]'>
						Learn to code by watching others
					</h1>
					<p className='text-white lg:leading-[1.65rem] leading-7 lg:px-0 px-2'>
						See how experienced developers solve problems in real-time. Watching
						scripted tutorials is great, but understanding how developers think
						is invaluable.
					</p>
				</div>
				<div className='lg:w-[540px] space-y-6'>
					<div className='bg-light-purple lg:px-4 px-20 lg:py-[18px] py-4 text-[15px] rounded-xl text-center shadow-grayishBlue tracking-[0.01rem] lg:leading-6 leading-7'>
						<span className='font-semibold text-white'>Try it free 7 days</span>
						<span className='text-white'> then $20/mo. thereafter</span>
					</div>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className='flex flex-col lg:gap-y-[18px] gap-y-4 bg-white lg:p-10 p-5 rounded-xl shadow-grayishBlue'
					>
						{(Object.keys(validationSchema.shape) as Path<Form>[]).map(
							label => (
								<Input
									key={label}
									label={label}
									error={errors[label]}
									register={register}
								/>
							)
						)}
						<button
							type='submit'
							className='uppercase py-4 text-center bg-light-green hover:bg-light-green/80 transition rounded-lg text-white font-medium tracking-wide outline-none focus-visible:ring-2 focus-visible:ring-light-purple shadow-grayishBlueInset'
						>
							Claim your free trial
						</button>
						<div className='text-gray-400 text-center text-[11px] -mt-[6px]'>
							<span>By clicking the button, you are agreeing to our </span>
							<a
								href='#'
								target='_blank'
								className='text-light-red font-bold cursor-pointer'
							>
								Terms and Services
							</a>
						</div>
					</form>
				</div>
			</section>
		</main>
	)
}
