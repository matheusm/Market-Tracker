import React, { useState, useEffect, useContext } from 'react'
import { StockContext } from '../../contexts/StockContext'
import styles from '../../styles/Ticker.module.css'

import Head from 'next/head'
import { useRouter } from 'next/router'

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

export default function Ticker() {
  const {
    loading,
    latestPrice,
    currentCurrency,
    setCurrentCurrency,
    companyInfo,
    historicalPrices,
  } = useContext(StockContext)
  const router = useRouter()
  const { ticker } = router.query

  useEffect(async () => {
    if (ticker) {
      setCurrentCurrency(ticker)
    }
  }, [ticker])

  let off
  useEffect(async () => {
    if (!loading) {
      const gradientOffset = () => {
        const dataMax = Math.max(...historicalPrices.map((i) => i.uv))
        const dataMin = Math.min(...historicalPrices.map((i) => i.uv))

        if (dataMax <= 0) {
          return 0
        }
        if (dataMin >= 0) {
          return 1
        }

        return dataMax / (dataMax - dataMin)
      }

      off = gradientOffset()
    }
  }, [])

  if (loading) return <h1>Loading...</h1>

  return (
    <div className={styles.tickerContainer}>
      <Head>
        <title>Market Tracker | {ticker}</title>
      </Head>
      <h1>
        <a href={companyInfo.website}>{companyInfo.companyName}</a>
      </h1>
      <p className={styles.tickerDescription}>{companyInfo.description}</p>
      <div className={styles.tickerInfos}>
        <div>
          <p>Setor:</p>
          <p>{companyInfo.sector}</p>
        </div>
        <div>
          <p>Ticker:</p>
          <p>{ticker}</p>
        </div>
        <div>
          <p>Valor</p>
          <p>{loading ? 'loading' : latestPrice}</p>
        </div>
      </div>
      <AreaChart
        width={800}
        height={400}
        data={historicalPrices}
        margin={{
          top: 40,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <defs>
          <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
            <stop offset={off} stopColor="green" stopOpacity={1} />
            <stop offset={off} stopColor="red" stopOpacity={1} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#000"
          fill="url(#splitColor)"
        />
      </AreaChart>
    </div>
  )
}
