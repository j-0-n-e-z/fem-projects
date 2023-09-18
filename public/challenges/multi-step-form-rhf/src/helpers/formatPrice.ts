import { Period } from '../types'

/**
 * Format string as $[price]/[mo|yr]
 * 
 * @param price Amount of money in dollars
 * @param period String which represents monthly or yearly 
 * @return Returns a formatted string
 */
export function formatPrice(price: number, period: Period) {
	const shortenedPeriod = period === 'monthly' ? 'mo' : 'yr'
	return `+$${price}/${shortenedPeriod}`
}
