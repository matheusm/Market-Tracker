import { createContext, useState, useEffect } from 'react'

import { stock } from '../resources/stock'

export const StockContext = createContext({})

export function StockProvider({ children }) {
  const [currentCurrency, setCurrentCurrency] = useState(null)
  const [companyInfo, setCompanyInfo] = useState(null)
  const [latestPrice, setLatestPrice] = useState(null)
  const [historicalPrices, setHistorialPrices] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(async () => {
    if (currentCurrency) {
      setLoading(true)
      const companyInfo = await stock.companyInfo(currentCurrency)
      const latestPriceNow = await stock.latestPrice(currentCurrency)
      const prices = await stock.historicalPrices(currentCurrency)
      setHistorialPrices(prices.map(item => ({name:item.date, uv:item.close})))
      setLatestPrice(latestPriceNow)
      setCompanyInfo(companyInfo)
      setLoading(false)
    }
  }, [currentCurrency])

  return (
    <StockContext.Provider
      value={{
        currentCurrency,
        setCurrentCurrency,
        latestPrice,
        loading,
        companyInfo,
        historicalPrices
      }}
    >
      {children}
    </StockContext.Provider>
  )
}
