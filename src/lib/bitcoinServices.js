export const getBitcoinData = (countryCode) => {
  // const countryCode = 'PHP'
  return fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?currency=${countryCode}`)
    .then(res => res.json())
}