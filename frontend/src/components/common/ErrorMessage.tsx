import { AlertCircle, RefreshCw, ServerCrash } from 'lucide-react'

interface ErrorMessageProps {
  message: string
  onRetry?: () => void
}

export const ErrorMessage = ({ message, onRetry }: ErrorMessageProps) => {
  const isNetworkError =
    message.toLowerCase().includes('failed to fetch') ||
    message.toLowerCase().includes('network') ||
    message.toLowerCase().includes('could not be loaded')

  return (
    <div
      role="alert"
      className="mx-auto max-w-2xl rounded-2xl border border-red-200/80 bg-red-50/90 p-5 text-red-900 shadow-sm backdrop-blur-sm"
    >
      <div className="flex items-start gap-3.5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600">
          {isNetworkError ? <ServerCrash size={20} /> : <AlertCircle size={20} />}
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-bold text-red-950">
            {isNetworkError
              ? 'Backend සේවාදායකය (Port 9090) සම්බන්ධ කරගත නොහැක'
              : 'දෝෂයක් සිදුවිය (Error)'}
          </h4>
          <p className="mt-1 text-xs text-red-700 leading-relaxed">
            {isNetworkError
              ? 'Backend API (http://localhost:9090) අක්‍රියව පවතී හෝ සම්බන්ධතාව අවහිර වී ඇත. කරුණාකර Backend සේවාදායකය Port 9090 හි run කර ඇත්දැයි තහවුරු කරගන්න.'
              : message}
          </p>

          {onRetry && (
            <div className="mt-3 flex items-center gap-3">
              <button
                type="button"
                onClick={onRetry}
                className="inline-flex items-center gap-1.5 rounded-xl bg-red-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-red-700 active:scale-95"
              >
                <RefreshCw size={13} />
                නැවත උත්සාහ කරන්න (Retry)
              </button>
              {isNetworkError && (
                <span className="text-[11px] text-red-600 font-mono">
                  Target: http://localhost:9090/api/dictionary-pairs
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
