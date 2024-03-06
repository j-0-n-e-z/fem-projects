import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { ChallengeSlider, ErrorElement } from '@/components'

import { App } from './App'
import './index.css'

const router = createBrowserRouter([
	{
		element: <App />,
		errorElement: <ErrorElement errorType='wrongAddress' />,
		path: '/'
	},
	{
		element: <ChallengeSlider />,
		errorElement: <ErrorElement errorType='challengeNotFound' />,
		path: `challenges/:challenge`
	}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<RouterProvider router={router} />
)
