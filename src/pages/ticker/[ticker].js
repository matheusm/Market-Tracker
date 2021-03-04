import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Ticker() {
  const router = useRouter()
  const { ticker } = router.query

  return (
    <div>
      <Head>
        <title>Market Tracker | {ticker}</title>
      </Head>
      Ticker: {ticker}
    </div>
  )
}
