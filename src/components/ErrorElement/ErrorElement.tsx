import type { FC } from 'react'

interface ErrorElementProps {
	errorMessage: string
}

const ErrorElement: FC<ErrorElementProps> = ({ errorMessage }) => (
	<div className='flex h-screen items-center justify-center'>
		<h2 className='font-Mooli text-4xl font-bold'>😭 {errorMessage}</h2>
	</div>
)

export default ErrorElement
