import * as React from "react";
import type { NextPage } from 'next';
import { PageLayout1 } from '../component/PageLayout1'
import { useGetTrendingData } from '../ions/hooks'
import { BasicList } from '../component/BasicList'

const HomePage: NextPage = () => {
  const { data, isLoading, error } = useGetTrendingData()

  return (
    <PageLayout1>
      {data && <BasicList items={data} />}
    </PageLayout1>
  )
}

export default HomePage