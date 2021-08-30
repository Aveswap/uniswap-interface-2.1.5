import { CHAIN_INFO, SupportedChainId } from 'constants/chains'
import { BigNumber, utils } from 'ethers'
import { Web3Provider } from '@ethersproject/providers'
import { all_networks } from 'connectors'

interface SwitchNetworkArguments {
  library: Web3Provider
  chainId: SupportedChainId
}

// provider.request returns Promise<any>, but wallet_switchEthereumChain must return null or throw
// see https://github.com/rekmarks/EIPs/blob/3326-create/EIPS/eip-3326.md for more info on wallet_switchEthereumChain
export async function switchToNetwork({ library, chainId }: SwitchNetworkArguments): Promise<null | void> {
  const info = chainId ? CHAIN_INFO[chainId] : undefined
  if (!chainId || !info || !library) {
    return null
  }
  if (!library?.provider?.request) {
    return
  }
  const formattedChainId = utils.hexStripZeros(BigNumber.from(chainId).toHexString())
  try {
    await library?.provider.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: formattedChainId }],
    });
  } catch (switchError) {
    // This error code indicates that the chain has not been added to MetaMask.
    if (switchError.code === 4902) {
      try {
        await library?.provider.request({
          method: 'wallet_addEthereumChain',
          params: [{
            chainId: formattedChainId,
            rpcUrls: [all_networks[chainId]],
            chainName: info.label,
            nativeCurrency: {
              name: "Binance",
              symbol: "BNB",
              decimals: 18
            },
            blockExplorerUrls: [info.explorer]
          }],
        });
      } catch (addError) {
        // handle "add" error
      }
    }
    // handle other "switch" errors
  }

  // return library?.provider.request({
  //     method: 'wallet_switchEthereumChain',
  //     params: [{ chainId: formattedChainId }],
  //   })
}
