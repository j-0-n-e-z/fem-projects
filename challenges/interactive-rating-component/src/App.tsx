import './App.css'
import { useState } from 'react'
import { SelectRating } from './components/SelectRating'
import { ThankYou } from './components/ThankYou'

function App() {
	const [selectedRating, setSelectedRating] = useState<number | undefined>()

	return (
		<main className='App'>
			<h1 className='notvisible'>Interactive Rating Component</h1>
			<section className='rating-section'>
				<h2 className='notvisible'>Rating Panel</h2>
				{!selectedRating ? (
					<SelectRating setSelectedRating={setSelectedRating} />
				) : (
					<ThankYou selectedRating={selectedRating!} />
				)}
			</section>
		</main>
	)
}

export default App
