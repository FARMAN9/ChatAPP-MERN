import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './contex/authprovider'
import { BrowserRouter, Routes, Route } from "react-router";






createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
    </AuthProvider>,
)
