import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './contex/authprovider'
import { BrowserRouter, Routes, Route } from "react-router";
import  {SocketProvider}  from './contex/socketContext.jsx'






createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <BrowserRouter>
    <SocketProvider>
    <App />
    </SocketProvider>
    </BrowserRouter>
    
    </AuthProvider>,
)
