import React, { Fragment, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import MainHeader from "./components/MainHeader/MainHeader"
import StoreGallery from "./components/StoreGallery/StoreGallery"
import StoreProductDetailed from "./components/StoreProductDetailed/StoreProductDetailed"
function App() {
  const [internalPage, setInternalPage] = useState({
    links: [{ name: 'Tienda', path: '/' }, { name: 'Ingresar', path: '/login' }, { name: 'Gestión de productos', path: '/pushPull' }]
  })

  const headerH1 = "stk2"
  
  return (
    <Fragment>
      <BrowserRouter>
        <MainHeader headerH1={headerH1} internalPage={internalPage.links}/>
        <Route path='/' exact component={StoreGallery} />
        <Route path='/home' exact component={StoreGallery} />
        <Route path='/index' exact component={StoreGallery} />
        <Route path='/detalle/:id' exact component={StoreProductDetailed} />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
