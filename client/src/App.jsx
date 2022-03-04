
import React from "react"
import { Navbar, Welcome, Footer,Services, Transactions, LandingPage} from "./components"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import CryptoTracker from "./Pages/CryptoTracker"
import CoinPage from "./Pages/CoinPage";
import Nft from './Pages/NFt/NFT';


const App = () => {
  return (
    <BrowserRouter>
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
       <Navbar/>
        <Routes>  
          <Route path="/" element={<LandingPage />} />
          <Route path="/crypto" element={<CryptoTracker />} />
          <Route path='/coins/:id' element={<CoinPage />} />
          <Route path='/nft' element={<Nft />} />
          <Route path='/transact' element={
          <div>
            <Welcome/>
            <Services/>
            <Transactions/>
          </div>}
          />
          </Routes>

          <Footer style={{height: 150}}/>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
