'use client';
import { useWeb3ModalAccount } from '@web3modal/ethers/react';

export default function Home() {
  const { isConnected } = useWeb3ModalAccount();

  return (
    <div className='mt-10 pl-10'>
      <h1 className='mb-4'>OneWallet: Simplifying Web3 Access</h1>
      {!isConnected ? (
      // <w3m-connect-button/> 
      <w3m-account-button/>
      ) : (
        <div>
          <w3m-account-button/>
        </div>
      )}
    </div>
  );
}
