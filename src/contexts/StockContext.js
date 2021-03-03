import { createContext, useState } from 'react'

export const StockContext = createContext({})

export function StockProvider({ children }) {
  return <StockContext.Provider value={{}}>{children}</StockContext.Provider>
}
