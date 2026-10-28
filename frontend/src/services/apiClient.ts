export class ApiError extends Error {
  status: number
  statusText: string

  constructor(status: number, statusText: string, message: string) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.statusText = statusText
  }
}

const API_BASE_URL: string =
  (import.meta.env.VITE_API_BASE_URL as string | undefined) ?? 'http://localhost:9090'

export const apiFetch = async <T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> => {
  const url = `${API_BASE_URL}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  })

  if (!response.ok) {
    let errorMessage = `API request failed with status ${response.status}`
    try {
      const data = await response.json()
      if (data && typeof data === 'object' && 'message' in data) {
        errorMessage = String(data.message)
      }
    } catch {
      // Fallback to status text if response is not JSON
      if (response.statusText) {
        errorMessage = response.statusText
      }
    }
    throw new ApiError(response.status, response.statusText, errorMessage)
  }

  return response.json() as Promise<T>
}
