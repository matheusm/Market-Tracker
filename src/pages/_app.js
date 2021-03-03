import '../styles/globals.css'

import { StockProvider } from '../contexts/StockContext'

function MyApp({ Component, pageProps }) {
  return (
    <StockProvider>
      <Component {...pageProps} />
    </StockProvider>
  )
}

export default MyApp
