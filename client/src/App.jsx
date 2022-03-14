import React, {  lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"


const CryptoTrackerComponent = lazy(() => import('./Pages/CryptoTracker'))
const CoinPageComponent = lazy(() => import('./Pages/CoinPage'))
const NftComponent = lazy(() => import('./Pages/NFt/NFT'))
const NavbarComponent = lazy(() => import('./components/Navbar'))
const TokenComponent = lazy(() => import('./Pages/CreateTokenPage'))
const WelcomeComponent = lazy(() => import('./components/Welcome'))
const ServicesComponent = lazy(() => import('./components/Services'))
const TransactionsComponent = lazy(() => import('./components/Transactions'))
const LandingPageComponent = lazy(() => import('./components/LandingPage'))
const FooterComponent = lazy(() => import('./components/Footer'))


const App = () => {
  return (
    <BrowserRouter>
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Suspense fallback={<h1>Loading ...</h1>}>

        
       <NavbarComponent/>
        <Routes>  
          <Route path="/" element={<LandingPageComponent />} />
          <Route path="/crypto" element={<CryptoTrackerComponent />} />
          <Route path='/coins/:id' element={<CoinPageComponent />} />
          <Route path='/nft' element={<NftComponent />} />
          <Route path='/token' element={<TokenComponent />} />
          <Route path='/transact' element={
          <div>
            <ServicesComponent/>
            <WelcomeComponent/>
           
            <TransactionsComponent/>
            
           
          </div>}
          />
          </Routes>
         
          <FooterComponent style={{height: 150}}/>
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
