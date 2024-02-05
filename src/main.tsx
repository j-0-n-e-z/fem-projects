import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './App'
import { ChallengeSlider } from './components/ChallengeSlider/ChallengeSlider'
import ErrorElement from './components/ErrorElement/ErrorElement'
import './index.css'

const router = createBrowserRouter([
	{
		element: <App />,
		errorElement: <ErrorElement errorMessage='Wrong address' />,
		path: '/'
	},
	{
		element: <ChallengeSlider />,
		errorElement: <ErrorElement errorMessage='Cannot Find This Challenge' />,
		path: `challenges/:challenge`
	}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<RouterProvider router={router} />
)
