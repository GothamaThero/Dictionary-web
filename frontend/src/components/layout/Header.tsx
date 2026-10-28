import { BookOpen, Globe } from 'lucide-react'

interface HeaderProps {
  isOnline?: boolean
}

export const Header = ({ isOnline = true }: HeaderProps) => {
  return (
    <header className="border-b border-slate-200/80 bg-white/95 backdrop-blur-md sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2.5 sm:py-3">
        <a href="/" className="flex items-center gap-3 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-700 to-indigo-600 text-white shadow-md shadow-blue-600/20 transition-transform group-hover:scale-105">
            <BookOpen size={19} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-base font-extrabold tracking-tight text-slate-900 leading-tight">
                EXONIT DICTIONARIES
              </span>
              <span className="rounded-md bg-blue-100/70 px-1.5 py-0.5 text-[10px] font-bold text-blue-800 tracking-wider">
                v1.0
              </span>
            </div>
            <span className="block text-[11px] font-medium text-slate-500 leading-none mt-0.5">
              Discover Languages • Connect Knowledge • Preserve Heritage
            </span>
          </div>
        </a>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 rounded-full bg-slate-100/80 px-3 py-1 text-xs font-medium text-slate-600">
            <Globe size={13} className="text-slate-500" />
            <span>Trilingua Lexicon</span>
          </div>

          <div
            className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
              isOnline
                ? 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-500/20'
                : 'bg-amber-50 text-amber-700 ring-1 ring-amber-500/20'
            }`}
          >
            <span
              className={`h-2 w-2 rounded-full ${
                isOnline ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'
              }`}
            />
            <span className="hidden md:inline">{isOnline ? 'API Connected' : 'API Offline'}</span>
          </div>
        </div>
      </nav>
    </header>
  )
}
