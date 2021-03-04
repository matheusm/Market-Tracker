import { iex } from '../config/iex'

export const stock = {
  latestPriceURL: (ticker) =>
    `${iex.base_url}/stock/${ticker}/quote/latestPrice?token=${iex.api_token}`,

  latestPrice: (ticker, callback) => {
    fetch(stock.latestPriceURL(ticker))
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      })
  },

  companyInfoURL: (ticker) =>
    `${iex.base_url}/stock/${ticker}/company?token=${iex.api_token}`,

  companyInfo: (ticker) => {
    fetch(stock.companyInfoURL(ticker))
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      })
  },
}
