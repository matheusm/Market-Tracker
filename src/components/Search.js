import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

import styles from '../styles/Search.module.css'

export function Search() {
  const router = useRouter()
  const notify = (message) => toast.error(message)

  const [text, setText] = useState('')

  function onSubmit(e) {
    e.preventDefault()

    if (text.length === 0) return notify('Escreva algo homi')
    if (!isNaN(parseFloat(text))) return notify('Escreva direito homi')

    router.push(`/ticker/${text.toUpperCase()}`)
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
