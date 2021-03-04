import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import styles from '../styles/Search.module.css'

export function Search() {
  const router = useRouter()

  const [text, setText] = useState('')

  function onSubmit(e) {
    e.preventDefault()
    router.push(`/ticker/${text}`)
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
