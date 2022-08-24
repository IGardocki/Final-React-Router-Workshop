import './App.css';
import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { AppContext } from './AppContext';
import styled from 'styled-components';

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

const WalletDiv = styled.div`
    margin: 20px;
`

const DetailSection = styled.section`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 1500px;
`

const ImageDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`

const StyledMainImg = styled.img`
  height: 400px;
  margin: 20px;
`

const WalletImg = styled.img`
  height: 100px;
  margin: 10px;
  &:hover{
    border: solid 1px #000
  }
`

export const Wallet = () => {
  const [mainImg, setMainImg] = useState(true);

  const navigate = useNavigate()
  const { wallets, walletDetails, setWallets, setWalletDetails } = useContext(AppContext);

  // image toggle (if mainImg is true, set to first image. if false, set to back image)
  let mainImgSrc = mainImg ? walletDetails.image : walletDetails.back;

  if (walletDetails.name === "") {
    // window.location.href = "http://localhost:3000/"
    navigate("/")
  } else if (walletDetails.id === 3) {
    return (
      <>
      <div>
        <h2>Patrick's Wallets</h2>
        <HeaderImage src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.8RLQFKU3mMJh-vi4f5Yn5gHaFn%26pid%3DApi&f=1" alt="patricks wallets"></HeaderImage>
        <button onClick={()=>{navigate("/")}}>Home</button>
      </div>
      <DetailSection>
        <div>
          <h1>{walletDetails.name.toUpperCase()}</h1>
          <h2>{`$20 for George`}</h2>
          <ul>
            {walletDetails.info.map((sentence) => {
              return <li>{sentence}</li>
            })}
          </ul>
        </div>

        <StyledMainImg id="mainImage" src={mainImgSrc} alt="leather-wallet-main" />

        <ImageDiv>
          <WalletImg onClick={() => (setMainImg(true))} src={walletDetails.image} alt="leather-wallet-front" />
          <WalletImg onClick={() => (setMainImg(false))} src={walletDetails.back} alt="leather-wallet-back" />
        </ImageDiv>

      </DetailSection>
      </>
    )
  }
  else {
    return (
      <>
      <div>
        <h2>Patrick's Wallets</h2>
        <HeaderImage src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.8RLQFKU3mMJh-vi4f5Yn5gHaFn%26pid%3DApi&f=1" alt="patricks wallets"></HeaderImage>
        <button onClick={()=>{navigate("/")}}>Home</button>
      </div>
      <DetailSection>
        <div>
          <h1>{walletDetails.name.toUpperCase()}</h1>
          <h2>{`$${walletDetails.price}`}</h2>
          <ul>
            {walletDetails.info.map((sentence) => {
              return <li>{sentence}</li>
            })}
          </ul>
        </div>

        <StyledMainImg id="mainImage" src={mainImgSrc} alt="leather-wallet-main" />

        <ImageDiv>
          <WalletImg onClick={() => (setMainImg(true))} src={walletDetails.image} alt="leather-wallet-front" />
          <WalletImg onClick={() => (setMainImg(false))} src={walletDetails.back} alt="leather-wallet-back" />
        </ImageDiv>

      </DetailSection>
      </>
    )
  }
}