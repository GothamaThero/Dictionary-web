import { useEffect, useState, useCallback } from 'react'
import type { DictionaryPair } from '../types/dictionary.types'
import { getDictionaryPairs } from '../services/dictionaryService'

export interface UseDictionaryPairsResult {
  pairs: DictionaryPair[]
  loading: boolean
  error: string
  reload: () => void
}

export const useDictionaryPairs = (): UseDictionaryPairsResult => {
  const [pairs, setPairs] = useState<DictionaryPair[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  const fetchPairs = useCallback(() => {
    let active = true
    setLoading(true)
    setError('')

    getDictionaryPairs()
      .then((data) => {
        if (active) {
          setPairs(data)
        }
      })
      .catch((err: unknown) => {
        if (active) {
          const message =
            err instanceof Error
              ? err.message
              : 'ශබ්දකෝෂ ලැයිස්තුව ලබාගත නොහැකි විය. කරුණාකර Backend සහ Database සම්බන්ධතාව පරීක්ෂා කරන්න.'
          setError(message)
        }
      })
      .finally(() => {
        if (active) {
          setLoading(false)
        }
      })

    return () => {
      active = false
    }
  }, [])

  useEffect(() => {
    const cancel = fetchPairs()
    return () => {
      cancel()
    }
  }, [fetchPairs])

  return {
    pairs,
    loading,
    error,
    reload: fetchPairs,
  }
}
