import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import * as React from "react";
import { BasicList } from '../component/BasicList';
import { PageLayout1 } from '../component/PageLayout1';
import { fetcher, trendingDataUrl } from '../ions/hooks';


const HomePage: NextPage = ({ data }) => {

  return (
    <PageLayout1>
      {data && <BasicList items={data} />}
    </PageLayout1>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  // `getStaticProps` is executed on the server side.
  const data = await fetcher(trendingDataUrl)
  console.log('SERVER: fetching data')

  return {
    props: {
      data,
      fallback: {
        '/api/trending': data
      }
    }
  }
}

export default HomePage