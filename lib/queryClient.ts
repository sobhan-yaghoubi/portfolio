/**
 * TanStack Query Client Configuration
 */

import { QueryClient } from "@tanstack/react-query"

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, //5 minutes
      gcTime: 30 * 60 * 1000, //30 minutes
      retry: (failureCount, error) => {
        if (error) {
          return false
        }
        return failureCount < 1
      },
      refetchOnWindowFocus: true,
      refetchOnMount: false,
    },
    mutations: {
      retry: false,
    },
  },
})
