const API_BASE_URL=import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:9090'

export interface LanguageSummary{
  code: string,
  name: string
}

export interface DictionaryPair {
  id: number
  slug: string
  displayName: string
  sourceLanguage: LanguageSummary
  targetLanguage: LanguageSummary
}


export const getDictionaryPairs = async (): Promise<DictionaryPair[]> => {
  const response = await fetch(`${API_BASE_URL}/api/dictionary-pairs`);

  if (!response.ok) {
    throw new Error('Dictionary list could not be loaded.');
  }

  return response.json() as Promise<DictionaryPair[]>;
};