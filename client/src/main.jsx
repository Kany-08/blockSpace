import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { TransactionProvider } from './context/TransactionContext';


ReactDOM.render(
 
    <React.StrictMode>
      <TransactionProvider>
      <App />
   </TransactionProvider>
    </React.StrictMode>,
 
  document.getElementById('root')
)
