import { Currency, ETHER, Token } from 'mindswap-sdk'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'MIND'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}

export default currencyId
