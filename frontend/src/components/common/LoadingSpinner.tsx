import { Loader2 } from 'lucide-react'

interface LoadingSpinnerProps {
  label?: string
}

export const LoadingSpinner = ({ label = 'Loading dictionaries...' }: LoadingSpinnerProps) => {
  return (
    <div role="status" className="flex items-center justify-center gap-3 py-16 text-slate-600">
      <Loader2 className="animate-spin text-blue-700" size={26} />
      <span className="text-sm font-medium">{label}</span>
    </div>
  )
}
