import React, { useEffect, useState, useContext } from 'react'
import { StockContext } from '../contexts/StockContext';

import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

import styles from '../styles/Search.module.css'

export function Search() {
  const {loading, latestPrice, currentCurrency, setCurrentCurrency } = useContext(
    StockContext
  );

  const router = useRouter()
  const notify = (message) => toast.error(message)

  const [text, setText] = useState('')

  async function onSubmit(e) {
    e.preventDefault()

    if (text.length === 0) return notify('Escreva algo homi')
    if (!isNaN(parseFloat(text))) return notify('Escreva direito homi')
    
    return router.push(`/ticker/${text.toUpperCase()}`)

  }
  return (
    <main className={styles.searchContainer}>
      <img src="images/logo.png" alt="Market Tracker" />

      <form>
        <label htmlFor="searchInput">Ticker</label>
        <input
          type="text"
          id="searchInput"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ex.: AAPL"
        />

        <button type="submit" onClick={onSubmit}>
          Search
        </button>
      </form>
    </main>
  )
}
