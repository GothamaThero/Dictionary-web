import { apiFetch } from './apiClient'
import type { DictionaryPair } from '../types/dictionary.types'

export const getDictionaryPairs = async (): Promise<DictionaryPair[]> => {
  return apiFetch<DictionaryPair[]>('/api/dictionary-pairs')
}
