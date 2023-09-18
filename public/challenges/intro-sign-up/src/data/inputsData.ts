export type Field = keyof typeof inputsData

export const inputsData = {
	firstName: {
		placeholder: 'First Name',
		type: 'text'
	},
	lastName: {
		placeholder: 'Last Name',
		type: 'text'
	},
	email: {
		placeholder: 'Email Address',
		type: 'email'
	},
	password: {
		placeholder: 'Password',
		type: 'password'
	}
}
