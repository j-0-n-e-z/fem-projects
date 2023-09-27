import App from './App'
import { ChallengeSlider } from './components/ChallengeSlider/ChallengeSlider'
import { challenges } from './data/challenges'

export const routes = [
	{
		element: <App />,
		path: '/'
	},
	...challenges.map((challenge, i) => ({
		element: (
			<ChallengeSlider
				current={challenge}
				next={challenges[i + 1]}
				prev={challenges[i - 1]}
			/>
		),
		path: `/${challenge}`
	}))
]
