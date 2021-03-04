import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.min.css';
import { StockProvider } from '../contexts/StockContext'
import { ToastContainer } from 'react-toastify'

function MyApp({ Component, pageProps }) {
  return (
    <StockProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </StockProvider>
  )
}

export default MyApp
