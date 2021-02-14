import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { Loader, Header, Footer } from "./components";
import CartProvider from "./contexts/CartContext";
import { DisplayCartProvider } from "./contexts/displayCart.context";
import "./styles/index.scss";

const HomeLazy = lazy(() => import("./pages/Home/Home"));

function App() {
  return (
    <div className="app">
      <CartProvider>
        <DisplayCartProvider>
          <Header />
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route exact path="/" component={HomeLazy} />
            </Switch>
          </Suspense>
          <Footer />
        </DisplayCartProvider>
      </CartProvider>
    </div>
  );
}

export default App;
