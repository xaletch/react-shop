import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import './index.css';

import Home from "./pages/Home";
import { MainLayout } from "./components";

const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */ './pages/Cart'));
const FullProducts = React.lazy(() => import(/* webpackChunkName: "FullProducts" */ './pages/FullProducts'));
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */ './pages/NotFound'));


function App() {
    return (
      <Routes>
        <Route path="/prosto-burger" element={<MainLayout/>}>
        <Route path="/prosto-burger" element={<Home />}></Route>
          <Route path="cart" element={
            <Suspense fallback={<div>Идёт загрузка...</div>}>
              <Cart />
            </Suspense>}>
          </Route>
          <Route path="product/:id" element={
            <Suspense fallback={<div>Идёт загрузка...</div>}>
              <FullProducts />
            </Suspense>}>
          </Route>
          <Route path="*" element={
            <Suspense fallback={<div>Идёт загрузка...</div>}>
              <NotFound />
            </Suspense>}>
          </Route>
        </Route>
      </Routes>
    );
}

export default App;