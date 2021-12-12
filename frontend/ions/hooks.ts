import React from 'react'
import useSWR from 'swr'


const fetcherData = (args: string) => fetch(args).then(res => res.json()).then(output => output.data)

const fetcher = (args: string) => fetch(args).then(res => res.json())

const trendingDataUrl: string = `https://api-stg.jam-community.com/song/trending`

export const useGetTrendingData = () => {
  const { data, error } = useSWR(trendingDataUrl, fetcher)

  return {
    data: data,
    isLoading: !error && !data,
    error: error
  }
}