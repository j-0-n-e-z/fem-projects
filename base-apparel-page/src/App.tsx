import { useFormik } from 'formik'
import * as Yup from 'yup'

export default function App() {
	const formik = useFormik({
		initialValues: { email: '' },
		validationSchema: Yup.object({
			email: Yup.string()
				.required('Email is required')
				.matches(
					/[A-Za-z\d._%+-]+@[A-Za-z\d.-]+\.[A-Za-z]{2,}/,
					'Please provide a valid email'
				)
				.max(30, 'Email cannot be longer than 30 characters')
		}),
		onSubmit: () => {
			console.log(formik.values.email)
			formik.resetForm()
		}
	})

	return (
		<main className='font-JosefinSans h-screen min-h-screen bg-gradientWhite'>
			<section className='flex lg:flex-row flex-col h-full'>
				<div className='lg:w-7/12 lg:px-20 xl:px-[164px] sm:px-16 lg:py-16 lg:bg-pattern bg-no-repeat bg-cover'>
					<img
						className='lg:w-auto w-24 lg:m-0 ml-8 my-8'
						src='./assets/images/logo.svg'
						alt='logo'
					/>
					<img
						className='lg:hidden block mx-auto'
						src='./assets/images/hero-mobile.jpg'
						alt='hero'
					/>
					<h1 className='flex flex-col lg:text-start text-center lg:mt-[134px] mt-[62px]'>
						<span className='heading font-light text-desaturatedRed'>
							We're
						</span>
						<span className='heading font-semibold text-darkGrayishRed'>
							coming soon
						</span>
					</h1>
					<p className='lg:text-start text-center ml-[1px] lg:mt-[22px] mt-[15px] xl:pr-[4rem] lg:px-0 px-7 text-desaturatedRed lg:text-[16px] text-[14px] tracking-[0.004rem] lg:leading-[1.7rem] leading-[1.4rem]'>
						Hello fellow shoppers! We're currently building our new fashion
						store. Add your email below to stay up-to-date with announcements
						and our launch deals.
					</p>
					<div className='lg:mt-10 mt-[30px] lg:p-0 px-10'>
						<form
							className='flex relative xl:w-[calc(100%-4rem)]'
							onSubmit={formik.handleSubmit}
						>
							<input
								className={`outline-none text-darkGrayishRed placeholder-desaturatedRed/50  bg-transparent border-[1px] rounded-full lg:px-8 px-6 lg:py-4 py-3 w-full lg:text-base text-[14px] ${
									formik.errors.email && formik.touched.email
										? 'border-softRed'
										: 'border-desaturatedRed/50'
								}`}
								type='email'
								name='email'
								value={formik.values.email}
								placeholder='Email Address'
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								onInvalid={e => e.preventDefault()}
							/>
							<button
								type='submit'
								className='absolute right-0 bg-gradient-to-br bg-size-200 bg-pos-0 hover:bg-pos-100 from-lightPink via-darkPink to-lightPink transition-all duration-300 rounded-full grid place-items-center lg:px-[43px] px-[26px] lg:py-[19px] py-[13px] lg:shadow-buttonDesktop shadow-buttonMobile'
							>
								<img src='./assets/images/icon-arrow.svg' alt='arrow' />
							</button>
							{formik.errors.email && formik.touched.email && (
								<img
									className='absolute lg:right-28 right-20 top-[50%] -translate-y-[50%]'
									src='./assets/images/icon-error.svg'
									alt='error'
								/>
							)}
						</form>
						{formik.errors.email && formik.touched.email && (
							<small className='block self-start text-softRed text-sm mt-3 lg:ml-8 ml-7'>
								{formik.errors.email}
							</small>
						)}
					</div>
				</div>
				<div className='lg:block hidden'>
					<img
						className='h-full object-cover object-left'
						src='./assets/images/hero-desktop.jpg'
						alt='hero'
					/>
				</div>
			</section>
		</main>
	)
}
