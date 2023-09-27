import { addOnsData } from './data/addOnsData'
import { plansData } from './data/plansData'

export type SelectedPlan = keyof typeof plansData

export type SelectedAddOn = keyof typeof addOnsData

export type PickedAddOns = Record<SelectedAddOn, boolean>

export type PlanDuration = keyof typeof plansData.arcade &
	keyof typeof plansData.advanced &
	keyof typeof plansData.pro

export interface FormItems {
	personalInfo: Record<string, string>
	selectedPlan: SelectedPlan
	planDuration: PlanDuration
	pickedAddOns: PickedAddOns
}

export type DefaultProps = FormItems & {
	updateFormData: (fieldsToUpdate: Partial<FormItems>) => void
}
