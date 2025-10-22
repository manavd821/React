import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import { ProductsProvider } from './contexts/product.context.jsx';  
import { UserProvider } from './contexts/user.context.jsx';
import {UserCartProvider} from './contexts/userCart.context.jsx';
import App from './App.jsx'
import './index.scss'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
    <UserProvider>
      <ProductsProvider>
        <UserCartProvider>
          <App />
        </UserCartProvider>
      </ProductsProvider>
    </UserProvider>
  </BrowserRouter>
  // </StrictMode>,
)
