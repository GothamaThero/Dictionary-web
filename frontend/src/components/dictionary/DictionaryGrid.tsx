import type { DictionaryPair } from '../../types/dictionary.types'
import { DictionaryCard } from './DictionaryCard'

interface DictionaryGridProps {
  pairs: DictionaryPair[]
  onSelectPair?: (pair: DictionaryPair) => void
}

export const DictionaryGrid = ({ pairs, onSelectPair }: DictionaryGridProps) => {
  return (
    <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
      {pairs.map((pair) => (
        <DictionaryCard key={pair.id} pair={pair} onSelect={onSelectPair} />
      ))}
    </div>
  )
}
