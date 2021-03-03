import React, { useEffect } from 'react'

import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { stock } from '../resources/stock'

export default function Home() {
  useEffect(() => {
    stock.latestPrice('aapl')
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Market Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main></main>

      <footer>
        <a href="https://iexcloud.io">Data provided by IEX Cloud</a>
      </footer>
    </div>
  )
}
