import { iex } from '../config/iex'

export const stock = {
  latestPrice: (ticker, callback) => {

    console.log(iex.api_token)

    const url = `${iex.base_url}/stock/${ticker}/quote/latestPrice?token=${iex.api_token}`

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      })
  },
}
