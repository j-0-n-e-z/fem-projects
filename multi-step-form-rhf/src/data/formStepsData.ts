import React from 'react'
import { FinishingUp } from '../components/FinishingUp'
import { PersonalInfo } from '../components/PersonalInfo'
import { PickAddOns } from '../components/PickAddOns'
import { SelectPlan } from '../components/SelectPlan'
import { ThankYou } from '../components/ThankYou'
import { FormStep } from '../types'

export const sidebarStepLabels = [
	'your info',
	'select plan',
	'add-ons',
	'summary'
]

export const formSteps: Record<number, FormStep> = {
	0: {
		title: 'Personal Info',
		description: 'Please provide your name, email address, and phone number.',
		component: React.createElement(PersonalInfo)
	},
	1: {
		title: 'Select your plan',
		description: 'You have the option of monthly or yearly billing.',
		component: React.createElement(SelectPlan)
	},
	2: {
		title: 'Pick add-ons',
		description: 'Add-ons help enhance your gaming experience.',
		component: React.createElement(PickAddOns)
	},
	3: {
		title: 'Finishing Up',
		description: 'Double-check everything looks OK before confirming.',
		component: React.createElement(FinishingUp)
	},
	4: {
		title: '',
		description: '',
		component: React.createElement(ThankYou)
	}
}
