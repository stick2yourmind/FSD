import React, { Fragment, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import MainHeader from "./components/MainHeader/MainHeader"
import StoreGallery from "./components/StoreGallery/StoreGallery"
import StoreProductDetailed from "./components/StoreProductDetailed/StoreProductDetailed"
import Register from "./components/Register/Register"
import Login from "./components/Login/Login"
import pushStoreProduct from './components/pushStoreProduct/pushStoreProduct'
import GlobalState from './GlobalState/GlobalState'

function App() {
  const [internalPage, setInternalPage] = useState({
    linksLoggedIn: [{ name: 'Tienda', path: '/' }],
    linksLoggedOut: [{ name: 'Tienda', path: '/' }, { name: 'Ingresar', path: '/login' }, 
      { name: 'Registrarse', path: '/register' }],
    linksLoggedInAdmin: [{ name: 'Alta de productos', path: '/push' }]
  })

  const headerH1 = "stk2"
  
  return (
    <GlobalState>
      <BrowserRouter>
        <MainHeader headerH1={headerH1} linksLoggedIn={internalPage.linksLoggedIn} 
          linksLoggedOut={internalPage.linksLoggedOut} linksLoggedInAdmin={internalPage.linksLoggedInAdmin}  />
        <Route path='/' exact component={StoreGallery} />
        <Route path='/home' exact component={StoreGallery} />
        <Route path='/index' exact component={StoreGallery} />
        <Route path='/detalle/:id' exact component={StoreProductDetailed} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
        <Route path='/push' exact component={pushStoreProduct} />
      </BrowserRouter>
    </GlobalState> 
  );
}

export default App;
