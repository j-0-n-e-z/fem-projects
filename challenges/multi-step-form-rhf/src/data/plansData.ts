import { Billing } from '../types'

export const freeMonthCount = 3

const monthlyPrice = {
	arcade: 9,
	advanced: 12,
	pro: 15
}

export const plansData = {
	arcade: {
		monthly: monthlyPrice.arcade,
		yearly: monthlyPrice.arcade * (12 - freeMonthCount)
	},
	advanced: {
		monthly: monthlyPrice.advanced,
		yearly: monthlyPrice.advanced * (12 - freeMonthCount)
	},
	pro: {
		monthly: monthlyPrice.pro,
		yearly: monthlyPrice.pro * (12 - freeMonthCount)
	}
} satisfies Record<string, Billing>
