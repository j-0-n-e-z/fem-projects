import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faFacebookF,
	faTwitter,
	faInstagram
} from '@fortawesome/free-brands-svg-icons'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { errorMessages } from './errorsData'

export default function App() {
	const formik = useFormik({
		initialValues: { email: '' },
		validationSchema: Yup.object({
			email: Yup.string()
				.required(errorMessages.email.required)
				.email(errorMessages.email.invalid)
		}),
		onSubmit: () => {
			console.log(formik.values)
			formik.resetForm()
		}
	})

	function handleChange(e: React.ChangeEvent) {
		if (formik.errors.email === errorMessages.email.required) {
			formik.setErrors({ email: '' })
			formik.setTouched({ email: false })
		}
		formik.handleChange(e)
	}

	return (
		<>
			<main className='h-max font-LibreFranklin'>
				<section className='grid justify-items-center'>
					<img
						className='lg:mt-[85px] mt-[170px] lg:w-auto w-[105px]'
						src='./assets/images/logo.svg'
						alt='logo'
					/>
					<h1 className='lg:mt-[41px] mt-[70px] lg:text-[48px] text-[45px] tracking-[-0.01rem]'>
						<span className='text-my-gray'>We are launching</span>
						<span className='font-bold'> soon!</span>
					</h1>
					<p className='lg:mt-2 mt-[30px] lg:text-xl text-2xl'>
						Subscribe and get notified
					</p>
					<form
						onSubmit={formik.handleSubmit}
						className='lg:w-auto w-full lg:h-auto h-[218px] px-24 flex lg:flex-row flex-col lg:mt-9 mt-[60px] lg:space-x-4 lg:space-y-0 space-y-5'
					>
						<div className='flex flex-col lg:w-[420px] w-full lg:h-[82px]'>
							<input
								className={`w-auto rounded-full text-very-dark-blue lg:text-base text-2xl placeholder:text-very-pale-blue lg:px-6 px-16 lg:py-4 py-6 border-[1px] outline-none ${
									formik.errors.email && formik.touched.email
										? 'border-light-red focus:border-light-red'
										: 'border-very-pale-blue focus:border-my-blue'
								}`}
								type='email'
								id='email'
								placeholder='Your email address...'
								value={formik.values.email}
								onChange={handleChange}
								onBlur={formik.handleBlur}
								onInvalid={e => e.preventDefault()}
							/>
							{formik.errors.email && formik.touched.email && (
								<p className='mt-2 italic lg:text-[13px] text-xl lg:text-start text-center lg:px-6 px-16 text-light-red'>
									{formik.errors.email}
								</p>
							)}
						</div>
						<button
							type='submit'
							className='h-min bg-my-blue text-white lg:text-base text-2xl rounded-full lg:px-16 lg:py-4 py-6 text-center outline-none hover:bg-my-blue/70 transition focus-visible:ring-2 focus-visible:ring-my-blue'
						>
							Notify Me
						</button>
					</form>
					<img
						className='lg:mt-16 mt-[100px] w-[640px]'
						src='./assets/images/illustration-dashboard.png'
						alt='dashboard'
					/>
				</section>
			</main>
			<footer className='mt-16 lg:gap-y-5 gap-y-12 flex flex-col items-center'>
				<div className='flex lg:gap-x-3 gap-x-5 lg:text-sm text-[28px]'>
					<a
						href='https://www.facebook.com'
						target='_blank'
						className='brand-icon'
						aria-label='facebook'
						>
						<FontAwesomeIcon icon={faFacebookF} />
					</a>
					<a
						href='https://www.twitter.com'
						target='_blank'
						className='brand-icon'
						aria-label='twitter'
						>
						<FontAwesomeIcon icon={faTwitter} />
					</a>
					<a
						href='https://www.instagram.com'
						target='_blank'
						className='brand-icon lg:text-base text-[34px]'
						aria-label='instagram'
					>
						<FontAwesomeIcon icon={faInstagram} />
					</a>
				</div>
				<p className='lg:mb-10 mb-[70px] text-my-gray lg:text-[13px] text-xl'>
					© Copyright Ping. All rights reserved.
				</p>
			</footer>
		</>
	)
}
