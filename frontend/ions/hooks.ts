import React from 'react'
import useSWR from 'swr'


const fetcherData = (args: string) => fetch(args).then(res => res.json()).then(output => output.data)

export const fetcher = (args: string) => fetch(args).then(res => res.json())

export const trendingDataUrl: string = `https://api-stg.jam-community.com/song/trending`

export const useGetTrendingData = () => {
  const { data, error } = useSWR(trendingDataUrl, fetcher)

  return {
    data: data,
    isLoading: !error && !data,
    error: error
  }
}