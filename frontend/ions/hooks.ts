import React from 'react'
import useSWR from 'swr'


const fetcherData = (...args: any[]) => fetch(...args).then(res => res.json()).then(output => output.data)

const fetcher = (...args: any[]) => fetch(...args).then(res => res.json())

const trendingDataUrl: string = `http://localhost:3000/api/trending`

export const useGetTrendingData = (domain: string) => {
  const { data, error } = useSWR(trendingDataUrl, fetcher)

  return {
    data: data,
    isLoading: !error && !data,
    error: error
  }
}