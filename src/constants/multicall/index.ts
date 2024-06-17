import { ChainId } from 'mindswap-sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x7B1f198bE2Dd0884a2d8A459f4F71bf557E73D8A', // TODO
  [ChainId.TESTNET]: '0x301907b5835a2d723Fe3e9E8C5Bc5375d5c1236A'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
