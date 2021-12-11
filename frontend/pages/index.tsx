import * as React from "react";
import type { NextPage } from 'next';
import { PageLayout1 } from '../component/PageLayout1'
import { useGetTrendingData } from '../ions/hooks'

const HomePage: NextPage = () => {
  const { data, isLoading, error } = useGetTrendingData()

  return (
    <PageLayout1>
      {data && <pre>{JSON.stringify(data, null, 4)}</pre>}
    </PageLayout1>
  )
}

export default HomePage