import React from "react"
import { Navbar, Welcome, Footer,Services, Transactions } from "./components"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import CryptoTracker from "./Pages/CryptoTracker"
import CoinPage from "./Pages/CoinPage"
import CreateTokenPage from "./Pages/CreateTokenPage"



const App = () => {

  return (
    
    <BrowserRouter>
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
       <Navbar/>
      
        <Routes>  
          <Route path='/' element={<CryptoTracker />} />
          <Route path='/create-token' element={<CreateTokenPage />} />
          <Route path='/coins/:id' element={<CoinPage />} />
          <Route path='/transact' element={
          <div>
            <Welcome/>
            <Services/>
            <Transactions/>
          </div>}
          />
        </Routes>
        
        <Footer/>
      </div>
    </div>
    </BrowserRouter>
   
    
  )
}

export default App
