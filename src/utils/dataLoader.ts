import { FinanceData } from '../types'

export async function loadFinanceData(): Promise<FinanceData> {
  const response = await fetch('/data.json')
  if (!response.ok) {
    throw new Error('Failed to load finance data')
  }
  return response.json()
}
