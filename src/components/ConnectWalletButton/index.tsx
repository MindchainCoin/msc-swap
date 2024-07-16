import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { Button, ButtonProps, useWalletModal, ConnectorNames } from 'msc-uikit'
import { connectorsByName } from 'connectors'
import useI18n from 'hooks/useI18n'

const UnlockButton: React.FC<ButtonProps> = (props) => {
  const TranslateString = useI18n()
  const { account, activate, deactivate, chainId } = useWeb3React()

  const handleLogin = (connectorId: ConnectorNames) => {
    const connector = connectorsByName[connectorId]
    if (connector) {
      const expectedChainId = 9996;
      if (chainId !== expectedChainId) {
        alert('Wrong chain ID. Please switch to the correct network.')
        return
      }
      activate(connector)
    }
  }

  const { onPresentConnectModal } = useWalletModal(handleLogin, deactivate, account as string)

  return (
    <Button onClick={onPresentConnectModal} {...props}>
      {TranslateString(292, 'Unlock Wallet')}
    </Button>
  )
}

export default UnlockButton
