export default function App() {
	return (
		<main className='grid h-screen w-full justify-items-center bg-cream lg:place-items-center'>
			<h1 className='fixed scale-0'>Product Preview Card</h1>
			<article className='mt-7 flex h-fit w-11/12 flex-col overflow-hidden rounded-xl bg-white lg:mt-0 lg:h-[450px] lg:w-[600px] lg:flex-row'>
				<div className='flex w-full justify-center lg:w-1/2'>
					<img
						className='hidden lg:block'
						src='./images/image-product-desktop.jpg'
						alt='product'
					/>
					<img
						className='block lg:hidden'
						src='./images/image-product-mobile.jpg'
						alt='product'
					/>
				</div>
				<div className='flex w-full flex-col p-6 lg:h-full lg:w-1/2 lg:p-8'>
					<span className='mb-3 font-Montserrat text-xs uppercase tracking-widest text-darkGrayishBlue lg:mb-5'>
						perfume
					</span>
					<h2 className='mb-4 font-Fraunces text-[32px] leading-8 text-veryDarkBlue lg:mb-6'>
						Gabrielle Essence Eau De Parfum
					</h2>
					<p className='mb-4 font-Montserrat text-[14px] font-medium leading-[1.45rem] text-darkGrayishBlue lg:mb-5'>
						A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of
						CHANEL.
					</p>
					<div className='mb-3 flex items-center gap-5 lg:mb-0'>
						<span className='font-Fraunces text-[32px] text-darkCyan'>$149.99</span>
						<small className='font-Montserrat text-darkGrayishBlue line-through'>$169.99</small>
					</div>
					<button
						type='button'
						className='mt-auto grid w-full grid-flow-col place-items-center justify-center gap-3 rounded-lg bg-darkCyan py-[14px] font-Montserrat text-sm font-bold text-white transition hover:bg-veryDarkBlue'
					>
						<img
							src='./images/icon-cart.svg'
							alt='cart'
						/>
						<span>Add to Cart</span>
					</button>
				</div>
			</article>
		</main>
	)
}
