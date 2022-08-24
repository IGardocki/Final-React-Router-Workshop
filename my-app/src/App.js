import './App.css';
import React from 'react';
import { useEffect, useState, useNavigate } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AllWallets } from './AllWallets';
import { AppContext } from './AppContext';
import { Wallet } from './Wallet';

function App() {

  const [wallets, setWallets] = useState([]);
  const [walletDetails, setWalletDetails] = useState({
    id: "",
    image: "",
    back: "",
    name: "",
    price: "",
    color: "",
    info: []
  })

  const gettersSetters = {
    wallets,
    walletDetails,
    setWallets,
    setWalletDetails
  }


  const fetchParameters = {

  }

  useEffect(() => {

    fetch('http://localhost:3001')
    .then(response => response.json())
    .then(data => {
      setWallets(data.wallets);
    })


  }, [])


  return (

    <Router>
      <AppContext.Provider value={ gettersSetters }>
      <Routes>
        <Route path="/" element={<AllWallets wallets={wallets}/>}></Route>
        <Route path=""></Route>
        <Route path=""></Route>

        <Route path="/Wallet/:id" element={<Wallet/>}/>
      </Routes>
      </AppContext.Provider>
    </Router>


  );
}

export default App;
