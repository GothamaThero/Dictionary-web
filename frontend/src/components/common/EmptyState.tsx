import { SearchX } from 'lucide-react'

interface EmptyStateProps {
  title?: string
  description?: string
}

export const EmptyState = ({
  title = 'No dictionaries found',
  description = 'Try searching with a different language or keyword.',
}: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-12 text-center shadow-sm">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
        <SearchX size={28} />
      </div>
      <h3 className="text-lg font-bold text-slate-800">{title}</h3>
      <p className="mt-1 text-sm text-slate-500">{description}</p>
    </div>
  )
}
