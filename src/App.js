import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { Loader, Header, Footer } from "./components";
import CartProvider from "./contexts/CartContext";
import { DisplayProvider } from "./contexts/DisplayContext";
import "./styles/index.scss";

const HomeLazy = lazy(() => import("./pages/Home/Home"));

function App() {
  return (
    <div className="app">
      <CartProvider>
        <DisplayProvider>
          <Header />
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route exact path="/" component={HomeLazy} />
            </Switch>
          </Suspense>
          <Footer />
        </DisplayProvider>
      </CartProvider>
    </div>
  );
}

export default App;
