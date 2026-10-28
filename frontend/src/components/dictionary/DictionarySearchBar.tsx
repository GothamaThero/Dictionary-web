import { Search, X } from 'lucide-react'

interface DictionarySearchBarProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export const DictionarySearchBar = ({
  value,
  onChange,
  placeholder = 'Find a dictionary...',
}: DictionarySearchBarProps) => {
  return (
    <div className="relative mx-auto mt-4 sm:mt-5 max-w-xl">
      <div className="flex items-center gap-2.5 rounded-2xl bg-white/95 p-1.5 pl-4 shadow-xl ring-1 ring-slate-900/10 backdrop-blur-sm transition-all focus-within:ring-2 focus-within:ring-blue-500 focus-within:shadow-2xl">
        <Search className="shrink-0 text-slate-400" size={18} />
        <input
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          aria-label="Search dictionaries"
          className="min-w-0 flex-1 bg-transparent py-2 text-sm text-slate-900 outline-none placeholder:text-slate-400"
        />

        {value && (
          <button
            type="button"
            onClick={() => onChange('')}
            aria-label="Clear search"
            className="p-1 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X size={16} />
          </button>
        )}

        <button
          type="button"
          className="rounded-xl bg-gradient-to-r from-blue-700 to-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:from-blue-800 hover:to-indigo-700 active:scale-95"
        >
          Explore
        </button>
      </div>
    </div>
  )
}
