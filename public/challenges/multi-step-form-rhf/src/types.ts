import { addOnsData } from './data/addOnsData'
import { plansData } from './data/plansData'

export interface Billing {
	monthly: number
	yearly: number
}

export interface BillingWithDescription extends Billing {
	description: string
}

export type Plan = keyof typeof plansData
export type AddOn = keyof typeof addOnsData

export type Period = keyof Billing

export interface FormItems {
	personalInfo: Record<string, string>
	plan: Plan
	period: Period
	addOns: AddOn[]
}

export interface FormStep {
	title: string
	description: string
	component: React.ReactNode
}
