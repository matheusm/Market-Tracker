import { iex } from '../config/iex'
import { toast } from 'react-toastify'

const notifyError = (message) => toast.error(message)
const notify = (message) => toast.info(message)

export const stock = {
  latestPriceURL: (ticker) =>
    `${iex.base_url}/stock/${ticker}/quote/latestPrice?token=${iex.api_token}`,

  latestPrice: async (ticker, loading) => {
    try {
      const response = await fetch(stock.latestPriceURL(ticker))
      if (response.status === 200) {
        const json = await response.json()
        return json
      } else if (response.status === 404) {
        return notify('Não conhecemos esse ticker :(')
      }
      if (response.status !== 200 && response.status !== 404) {
        return notify('Tivemos algum erro interno')
      }
    } catch (e) {
      return notifyError('Tivemos algum erro desconhecido')
    }
  },

  companyInfoURL: (ticker) =>
    `${iex.base_url}/stock/${ticker}/company?token=${iex.api_token}`,

  companyInfo: async (ticker) => {
    try {
      const response = await fetch(stock.companyInfoURL(ticker))
      if (response.status === 200) {
        const json = await response.json()
        return json
      }
    } catch (error) {
      return notifyError('Tivemos algum erro desconhecido')
    }
  },

  historicalPricesURL: (ticker) =>
    `${iex.base_url}/stock/${ticker}/chart/1y?token=${iex.api_token}`,

  historicalPrices: async (ticker) => {
    try {
      const response = await fetch(stock.historicalPricesURL(ticker))
      if (response.status === 200) {
        const json = await response.json()
        return json
      }
    } catch (error) {
      return notifyError('Tivemos algum erro desconhecido')
    }
  },
}
