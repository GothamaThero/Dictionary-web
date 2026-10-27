
import { useEffect, useState } from 'react'
import { BookOpen, Search, ArrowRight } from 'lucide-react'
import { type DictionaryPair, getDictionaryPairs } from './services/dictionaryService.mts'

export default function App() {
  const [pairs, setPairs] = useState<DictionaryPair[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    let active = true

    getDictionaryPairs()
      .then((data) => {
        if (active) setPairs(data)
      })
      .catch(() => {
        if (active) {
          setError(
            'Dictionary list එක ලබාගත නොහැකියි. Backend සහ database පරීක්ෂා කරන්න.',
          )
        }
      })
      .finally(() => {
        if (active) setLoading(false)
      })

    return () => {
      active = false
    }
  }, [])

  const filteredPairs = pairs.filter((pair) =>
    `${pair.displayName} ${pair.sourceLanguage.name} ${pair.targetLanguage.name}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="border-b border-slate-200 bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5">
          <a href="/" className="flex items-center gap-3">
            <span className="rounded-xl bg-blue-700 p-2 text-white">
              <BookOpen size={25} />
            </span>
            <span>
              <span className="block text-lg font-bold text-slate-900">
                EXONIT DICTIONARIES
              </span>
              <span className="text-xs text-slate-500">
                A world of words
              </span>
            </span>
          </a>

          {/* <span className="hidden items-center gap-2 text-sm text-slate-600 sm:flex">
            <Languages size={18} />
            Multilingual Dictionary
          </span> */}
        </nav>
      </header>

      <main>
        <section className="bg-gradient-to-br from-blue-950 via-blue-800 to-indigo-700 px-5 py-20 text-white sm:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
              Discover Languages. Connect Knowledge.
            </p>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
              Every word opens
              <span className="block text-blue-200">a new world.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
              Explore English, Sinhala, Pali and Sanskrit through
              a growing collection of dictionaries.
            </p>

            <label className="mx-auto mt-9 flex max-w-2xl items-center gap-3 rounded-2xl bg-white p-2 pl-4 shadow-xl">
              <Search className="shrink-0 text-slate-400" size={22} />

              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Find a dictionary..."
                aria-label="Search dictionaries"
                className="min-w-0 flex-1 bg-transparent py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
              />

              <span className="hidden rounded-xl bg-blue-700 px-4 py-3 text-sm font-semibold text-white sm:inline">
                Explore
              </span>
            </label>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:py-20">
          <div className="mb-9">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
              Our Dictionaries
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              Choose your dictionary
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              Select a language pair to begin your language journey.
              More dictionaries can be added as the platform grows.
            </p>
          </div>

          {loading && (
            <p role="status" className="py-10 text-slate-600">
              Loading dictionaries...
            </p>
          )}

          {!loading && error && (
            <div
              role="alert"
              className="rounded-xl border border-red-200 bg-red-50 p-5 text-red-700"
            >
              {error}
            </div>
          )}

          {!loading && !error && filteredPairs.length === 0 && (
            <p className="rounded-xl border border-slate-200 bg-white p-6 text-slate-600">
              No dictionaries found.
            </p>
          )}

          {!loading && !error && filteredPairs.length > 0 && (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {filteredPairs.map((pair) => (
                <article
                  key={pair.id}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                    <BookOpen size={25} />
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                    {pair.sourceLanguage.code} → {pair.targetLanguage.code}
                  </p>

                  <h3 className="mt-3 min-h-14 text-lg font-bold text-slate-900">
                    {pair.displayName}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600">
                    {pair.sourceLanguage.name}
                    {' → '}
                    {pair.targetLanguage.name}
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      window.alert(
                        `${pair.displayName}\nDictionary search will be added in Phase 2.`,
                      )
                    }}
                    className="mt-6 flex w-full items-center justify-between rounded-xl bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-800 transition hover:bg-blue-700 hover:text-white"
                  >
                    Explore dictionary
                    <ArrowRight size={18} />
                  </button>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white px-5 py-7 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Trilingua Lexicon. Built to connect languages.
      </footer>
    </div>
  )
}
