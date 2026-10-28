export interface LanguageSummary {
  code: string
  name: string
}

export interface DictionaryPair {
  id: number
  slug: string
  displayName: string
  sourceLanguage: LanguageSummary
  targetLanguage: LanguageSummary
}
