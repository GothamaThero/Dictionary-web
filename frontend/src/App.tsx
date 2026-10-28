import { useState, useMemo } from 'react'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { DictionarySearchBar } from './components/dictionary/DictionarySearchBar'
import { DictionaryGrid } from './components/dictionary/DictionaryGrid'
import { LoadingSpinner } from './components/common/LoadingSpinner'
import { ErrorMessage } from './components/common/ErrorMessage'
import { EmptyState } from './components/common/EmptyState'
import { useDictionaryPairs } from './hooks/useDictionaryPairs'

const App = () => {
  const { pairs, loading, error, reload } = useDictionaryPairs()
  const [search, setSearch] = useState('')

  const filteredPairs = useMemo(() => {
    const query = search.trim().toLowerCase()
    if (!query) {
      return pairs
    }
    return pairs.filter((pair) =>
      `${pair.displayName} ${pair.sourceLanguage.name} ${pair.targetLanguage.name} ${pair.sourceLanguage.code} ${pair.targetLanguage.code}`
        .toLowerCase()
        .includes(query),
    )
  }, [pairs, search])

  return (
    <div className="flex min-h-screen lg:h-screen lg:overflow-hidden flex-col justify-between bg-slate-50 text-slate-800">
      {/* Header */}
      <Header isOnline={!error && !loading} />

      <main className="flex flex-1 flex-col justify-between overflow-hidden">
        {/* Compact Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-800 px-5 py-6 sm:py-7 text-white shadow-md">
          {/* Subtle background glow effect */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative mx-auto max-w-3xl text-center">
            <p className="mb-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-blue-200">
              Discover Languages • Connect Knowledge • Preserve Heritage
            </p>

            <h1 className="text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">
              Every word opens
              <span className="inline sm:block text-blue-200 ml-2 sm:ml-0">a new world.</span>
            </h1>

            <p className="mx-auto mt-2 max-w-lg text-xs sm:text-sm text-blue-100/90 leading-relaxed">
              Explore English, Sinhala, Pali, and Sanskrit through our authentic, database-driven multilingual dictionary platform.
            </p>

            <DictionarySearchBar
              value={search}
              onChange={setSearch}
              placeholder="Find a dictionary (e.g., Sinhala, English, Pali)..."
            />
          </div>
        </section>

        {/* Dictionaries Content Area - Vertically Centered in remaining space */}
        <section className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 py-4">
          <div className="mb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-1">
            <div>
              <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-blue-700">
                Our Dictionaries
              </p>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-slate-900">
                Choose your dictionary
              </h2>
            </div>
            <p className="text-xs text-slate-500">
              Select a language pair to begin your study. {pairs.length > 0 && `(${pairs.length} pairs available)`}
            </p>
          </div>

          {loading && <LoadingSpinner label="Loading dictionaries from backend..." />}

          {!loading && error && (
            <ErrorMessage message={error} onRetry={reload} />
          )}

          {!loading && !error && filteredPairs.length === 0 && (
            <EmptyState
              title={pairs.length === 0 ? 'No dictionaries available' : 'No matching dictionaries found'}
              description={
                pairs.length === 0
                  ? 'No active dictionary pairs were found in the database.'
                  : `No dictionary matches "${search}". Try searching with another term.`
              }
            />
          )}

          {!loading && !error && filteredPairs.length > 0 && (
            <DictionaryGrid pairs={filteredPairs} />
          )}
        </section>
      </main>

      {/* Slim Footer */}
      <Footer />
    </div>
  )
}

export default App
