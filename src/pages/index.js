import React, { useEffect } from 'react'

import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { stock } from '../resources/stock'

import { Search } from '../components/Search'

export default function Home() {
  useEffect(() => {
    stock.latestPrice('aapl')
    stock.companyInfo('aapl')
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Market Tracker | Inicio</title>
      </Head>

      <Search />

      <footer>
        <a href="https://github.com/matheusm">Made by Matheus Martins</a>
        <a href="https://iexcloud.io">Data provided by IEX Cloud</a>
      </footer>
    </div>
  )
}
