import { Result } from './components/Result'
import { Summary } from './components/Summary'

export default function App() {
	return (
		<main className='min-h-screen bg-white grid place-items-center font-HankenGrotesk text-lg'>
			<h1 className='fixed scale-0'>Results Summary</h1>
			<article className='flex lg:flex-row flex-col lg:w-[735px] lg:h-[512px] w-full h-screen bg-white lg:shadow-xl rounded-[30px]'>
				<Result />
				<Summary />
			</article>
		</main>
	)
}
