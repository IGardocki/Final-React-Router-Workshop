import './App.css';
import React from 'react';
import { useEffect, useState, useNavigate, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { AppContext } from './AppContext';

const HeaderImage = styled.img`
    height: 100px;
    width: 100px;
`

const WalletImage = styled.img`
    height: 300px;
    width: 300px;
`

const WalletsContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    max-width: 1500px;
`

const WalletsContainerSection = styled.section`
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
`

/*

  @media (min-width: 30em) {

  }

*/

const WalletDiv = styled.div`
    margin: 20px;
`

export const AllWallets = () => {

  const { wallets, walletDetails, setWallets, setWalletDetails } = useContext(AppContext);

  console.log(wallets);

  if (wallets.id === 3) {

  }

  return (
    <>
      <h2>Patrick's Wallets</h2>
      <HeaderImage src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.8RLQFKU3mMJh-vi4f5Yn5gHaFn%26pid%3DApi&f=1" alt="patricks wallets"></HeaderImage>
      <WalletsContainerSection>
        <WalletsContainer>
          {wallets.map((wallet => {
            if (wallet.id === 3) {
              return (
                <Link to={`/Wallet/${wallet.id}`}>
                  <WalletDiv onClick={() => setWalletDetails(
                      wallet
                  )}>
                    <WalletImage src={`.${wallet.image}`} alt="wallet-image"></WalletImage>
                    <p>{wallet.name.toUpperCase()}</p>
                    <p>SALE!!!! $20 for George</p>
                  </WalletDiv>
                </Link>
              )
            }
            else{
                return (
                  <Link to={`/Wallet/${wallet.id}`}>
                    <WalletDiv onClick={() => setWalletDetails(
                        wallet
                    )}>
                      <WalletImage src={`.${wallet.image}`} alt="wallet-image"></WalletImage>
                      <p>{wallet.name.toUpperCase()}</p>
                      <p>${wallet.price}</p>
                    </WalletDiv>
                  </Link>
                )
            }
          }))}
        </WalletsContainer>

      </WalletsContainerSection>
    </>
  )
}
// U:\home\trey\projects\sdi-blended-workshop-react-router-scaffold\wallet-images\wallet-8.jpeg
// wallet-images\wallet-8.jpeg
//wallet-images/wallet-1.jpeg
// "/images/wallet-1.jpeg"
// src=../../wallet-images/wallet-1.jpeg
// my-app\wallet-images
// "/" src
// "/" my-app
// "/" sdi-blended-workshop-react-router