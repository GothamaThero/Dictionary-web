import { BookOpen, ArrowRight } from 'lucide-react'
import type { DictionaryPair } from '../../types/dictionary.types'

interface DictionaryCardProps {
  pair: DictionaryPair
  onSelect?: (pair: DictionaryPair) => void
}

export const DictionaryCard = ({ pair, onSelect }: DictionaryCardProps) => {
  const handleClick = () => {
    if (onSelect) {
      onSelect(pair)
    } else {
      window.alert(
        `${pair.displayName}\nDictionary search and word exploration will be available in Phase 2.`,
      )
    }
  }

  // Language script mapping for badges
  const getScriptBadge = (code: string) => {
    switch (code) {
      case 'en':
        return 'Latin'
      case 'si':
        return 'සිංහල'
      case 'pi':
        return 'පාලි'
      case 'sa':
        return 'Deva'
      default:
        return code.toUpperCase()
    }
  }

  return (
    <article className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10">
      <div>
        {/* Top Badges */}
        <div className="mb-3.5 flex items-center justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-colors duration-300 group-hover:bg-blue-700 group-hover:text-white shadow-sm">
            <BookOpen size={19} />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="rounded-lg bg-blue-50 px-2 py-0.5 text-[11px] font-bold text-blue-800 ring-1 ring-blue-700/10">
              {pair.sourceLanguage.code.toUpperCase()} → {pair.targetLanguage.code.toUpperCase()}
            </span>
          </div>
        </div>

        {/* Display Name */}
        <h3 className="text-base font-bold text-slate-900 leading-snug line-clamp-1 transition-colors group-hover:text-blue-700">
          {pair.displayName}
        </h3>

        {/* Language Details */}
        <div className="mt-1.5 flex items-center gap-1.5 text-xs text-slate-500">
          <span className="font-medium text-slate-700">{pair.sourceLanguage.name}</span>
          <span className="text-slate-400">({getScriptBadge(pair.sourceLanguage.code)})</span>
          <span className="text-blue-500 font-semibold">→</span>
          <span className="font-medium text-slate-700">{pair.targetLanguage.name}</span>
          <span className="text-slate-400">({getScriptBadge(pair.targetLanguage.code)})</span>
        </div>
      </div>

      {/* Action Button */}
      <button
        type="button"
        onClick={handleClick}
        className="mt-4 flex w-full items-center justify-between rounded-xl bg-slate-50 px-3.5 py-2 text-xs font-semibold text-slate-700 ring-1 ring-slate-200/80 transition-all duration-200 group-hover:bg-blue-700 group-hover:text-white group-hover:ring-blue-700"
      >
        <span>Explore dictionary</span>
        <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
      </button>
    </article>
  )
}
