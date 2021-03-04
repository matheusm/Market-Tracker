import React, { useEffect } from 'react'

import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { stock } from '../resources/stock'

import { Search } from '../components/Search'
import { RecomendationCard } from '../components/RecomendationCard'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Market Tracker | Inicio</title>
      </Head>

      <Search />
      <div className={styles.recomendationContainer}>
        <div>
          <RecomendationCard
            image="apple.png"
            ticker="AAPL"
            companyName="Apple"
          />
          <RecomendationCard
            image="facebook.png"
            ticker="FB"
            companyName="Facebook"
          />
          <RecomendationCard
            image="twitter.png"
            ticker="TWTR34"
            companyName="Twitter"
          />
        </div>
      </div>
      <footer>
        <a href="https://github.com/matheusm">Made by Matheus Martins</a>
        <a href="https://iexcloud.io">Data provided by IEX Cloud</a>
      </footer>
    </div>
  )
}
