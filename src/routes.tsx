import App from './App'
import { ChallengeSlider } from './components/ChallengeSlider/ChallengeSlider'

export const routes = [
	{
		element: <App />,
		path: '/'
	},
	{
		element: <ChallengeSlider />,
		path: `challenges/:challenge`
	}
]
