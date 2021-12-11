import * as React from "react";
import type { NextPage } from 'next';
import { PageLayout1 } from '../component/PageLayout1'

const HomePage: NextPage = () => {
  return (
    <PageLayout1>
      <h1>Some text goes in here</h1>
    </PageLayout1>
  )
}

export default HomePage